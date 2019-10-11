import React, { Component } from 'react'
import { RefreshControl, Image, ScrollView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AboutStyle from '../../Styles/AboutStyle'
import { DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      vapeIcons: {
        freedom: require(`../../Assets/Images/vape-vector-freedom.png`),
        vision: require(`../../Assets/Images/vape-vector-vision.png`),
        radiant: require(`../../Assets/Images/vape-vector-radiant.png`),
        intuition: require(`../../Assets/Images/vape-vector-intuition.png`),
        passion: require(`../../Assets/Images/vape-vector-passion.png`),
        healing: require(`../../Assets/Images/vape-vector-healing.png`)
      },
      data: []
    }
  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = () => {
    this.setState({ refreshing: true })
    fetch(Globals.SEVER_API_URL + '/about', {
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

  _goTo = (view, item = {}) => {
    this.props.navigation.navigate(view, {...item})
  }

  render() {
    return (
      <View style={AboutStyle.container}>
        <Header
          containerStyle={AboutStyle.headerContainer}
          placement="left"
          centerComponent={
            <TouchableOpacity onPress={() => this._goTo('Home')}>
              <Image style={AboutStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
            </TouchableOpacity>
          }
          centerContainerStyle={AboutStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          // leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Home') }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
            <View style={AboutStyle.headContainer}>
              {this.state.data && this.state.data.picture &&
                <Image style={AboutStyle.headImage} source={{uri: this.state.data.picture.url}} />
              }
              <Text style={AboutStyle.headTitle}>{this.state.data ? this.state.data.title : ''}</Text>
              <Text style={AboutStyle.headDescription}>{this.state.data ? this.state.data.description : ''}</Text>
            </View>
            <View style={AboutStyle.bodyContent}>
              <Text style={AboutStyle.bodyTitle}>{this.state.data ? this.state.data.subtitle : ''}</Text>
              <Text style={AboutStyle.bodySubtitle}>{this.state.data ? this.state.data.small_subtitle : ''}</Text>
              {this.state.data && this.state.data.picture_second &&
                <Image style={AboutStyle.bodyImage} source={{uri: this.state.data.picture_second.url}} />
              }
              <View style={AboutStyle.bodyFooter}>
                {this.state.data && this.state.data.items && this.state.data.items.map(
                  (item, i) => {
                    return (
                      <TouchableOpacity key={i} style={AboutStyle.bodyFooterItem} onPress={() => this._goTo('Vape', item)}>
                        <Image style={{ width: 40, height: 40 }} resizeMode='contain' source={{ uri: item.icon.url}} />
                        <Text style={{color: item.color, fontSize: 20, fontWeight: 'bold'}}>{item.name.split(" ")[0]}</Text>
                        <Icon name="chevron-right" color={item.color} size={20}/>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default About;