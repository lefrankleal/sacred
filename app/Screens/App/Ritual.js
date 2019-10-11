import React, { Component } from 'react'
import { Dimensions, SafeAreaView, Alert, Image, ScrollView, RefreshControl, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import RitualStyle from '../../Styles/RitualStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Globals from '../../config/Globals'
import Youtube from '../../Components/Youtube'
import { DrawerActions } from 'react-navigation'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Ritual extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: []
    }
  }

  static navigationOptions = {
    drawerLabel: 'Sacred Rituals',
  }

  componentDidMount = () => {
    this._getData()
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
  }

  _getData = () => {
    this.setState({ refreshing: true })
    fetch(Globals.SEVER_API_URL + '/rituals', {
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
      <SafeAreaView style={RitualStyle.container}>
        <Header
          containerStyle={RitualStyle.headerContainer}
          placement="left"
          centerComponent={
            <TouchableOpacity onPress={() => this._goTo('Home')}>
              <Image style={RitualStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
            </TouchableOpacity>
          }
          centerContainerStyle={RitualStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          // leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Home') }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._getData}
            />
          }>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sacred Rituals</Text>
          </View>
          <View style={{ height: 80, width: width }}>
            <Image style={{ width: '100%' }} source={require('../../Assets/Images/shop-banner.png')} />
          </View>
          <View style={RitualStyle.intro}>
            <Text style={RitualStyle.introTitle}>{this.state.data ? this.state.data.title : '' }</Text>
            <Text style={RitualStyle.introDescription}>{this.state.data ? this.state.data.description : '' }</Text>
          </View>
          <View
            style={RitualStyle.ritualsContainer}>
            {this.state.data && this.state.data.items && this.state.data.items.length > 0 && this.state.data.items.map(
              (v, i) => {
                return (
                  <View key={i} style={RitualStyle.itemContainer}>
                    {v.category && v.category.length > 0 &&
                      <Text style={RitualStyle.itemCategory}>{v.category.toUpperCase()}</Text>
                    }
                    {v.name && v.name.length > 0 &&
                      <Text style={RitualStyle.itemName}>{v.name.toUpperCase()}</Text>
                    }
                    {v.description && v.description.length > 0 &&
                      <Text style={RitualStyle.itemDescription}>{v.description}</Text>
                    }
                    <Youtube video={v.video.id} />
                  </View>
                )
              }
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Ritual;