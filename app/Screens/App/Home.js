import React, { Component } from 'react'
import { Dimensions, RefreshControl, Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HomeStyle from '../../Styles/HomeStyle'
import Youtube from '../../Components/Youtube'
import { DrawerActions } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: {}
    }
  }

  componentWillMount = () => {
    this._getData()
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
  }

  _getData = () => {
    this.setState({ refreshing: true })
    fetch(Globals.SEVER_API_URL + '/home', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json().then(
      json => ({
        url: res.url,
        headers: res.headers.map,
        status: {
          status: res.status,
          statusText: res.statusText || ''
        },
        body: json
      })
    )).then((res) => {
      this.setState({ refreshing: false })
      this.setState({ 'data': res.body })
    }).catch((error) => {
      this.setState({ refreshing: false })
      Alert.alert('Error', 'Something is wrong with your request, please verify you have network connection and be sure you have entered a valid URL')
    })
  }

  render() {
    return (
      <SafeAreaView style={HomeStyle.container}>
        <Header
          containerStyle={HomeStyle.headerContainer}
          placement="left"
          centerComponent={<Image style={HomeStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />}
          centerContainerStyle={HomeStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
        // leftComponent={{ icon: 'arrow-back', color: 'transparent' }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
          <View style={HomeStyle.Introduction}>
            <Youtube video={this.state.data && this.state.data.video ? this.state.data.video.id : 'uQaQVSRak4E'} />
            <Text style={HomeStyle.introductionTitleText}>
              {this.state.data? this.state.data.title : '' }
            </Text>
            <Text style={HomeStyle.introductionText}>{this.state.data? this.state.data.description : '' }</Text>
          </View>
          <View style={HomeStyle.SacredLifeStyleLogo}>
          {this.state.data && this.state.data.picture &&
            <Image style={{ height: 80, width: width * 0.8 }} resizeMode='contain' source={{uri: this.state.data.picture.url}} />
          }
          </View>
          <View>
            <Text style={HomeStyle.SacredLifeStyleText}>{this.state.data ? this.state.data.description_second : '' }</Text>
          </View>
          <View style={HomeStyle.SacredLifeStyleItems}>
            {this.state.data && this.state.data.items && this.state.data.items.map(
              (item, index) => {
                return (
                  <TouchableOpacity key={index} style={HomeStyle.SacredLifeStyleItem} onPress={() => { item.name == 'Products' ? this._goTo('About') : '' }}>
                    <View style={HomeStyle.SacredLifeStyleHeader}>
                      <Image style={HomeStyle.SacredLifeStyleHeaderImage} source={require('../../Assets/Images/innovation.jpg')} />
                    </View>
                    <View style={HomeStyle.SacredLifeStyleContent}>
                      <Image style={HomeStyle.SacredLifeStyleContentImage} resizeMode='contain' source={require('../../Assets/Images/innovation-logo.png')} />
                      <View style={{ flex: 4 }}>
                        <Text style={HomeStyle.SacredLifeStyleContentTextTitle}>{item.name}</Text>
                        <Text style={HomeStyle.SacredLifeStyleContentTextDescription}>{item.description}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home;