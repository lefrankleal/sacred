import React, { Component } from 'react'
import { Alert, RefreshControl, Image, ScrollView, View } from 'react-native'
import { Button, Header, Text, Input, ThemeProvider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SubscribeStyle from '../../Styles/SubscribeStyle'
import Globals from '../../config/Globals'
import { DrawerActions } from 'react-navigation'

class Subscribe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      email: ''
    }
  }

  componentDidMount = () => {
  }

  requireSubscribe = () => {
    this.setState({ refreshing: true })
    fetch(Globals.SEVER_API_URL + '/newsletter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email
      })
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

      this.setState({ refreshing: false, email: '' })
      if (res.body.status === true) {
        Alert.alert('Success', 'Great, you have been subscribed to our newsletter.')
      } else {
        Alert.alert('Error', 'Something is wrong with the server please try again later.')
      }
    }).catch((error) => {
      this.setState({ refreshing: false })
      Alert.alert('Error', 'Something is wrong with your request, please verify you have network connection and be sure you have entered a valid URL')
    })
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
  }

  render() {
    return (
      <ThemeProvider theme={Globals.THEME}>
        <View style={SubscribeStyle.container}>
          <Header
            containerStyle={SubscribeStyle.headerContainer}
            placement="left"
            centerComponent={
              <TouchableOpacity onPress={() => this._goTo('Home')}>
                <Image style={SubscribeStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
              </TouchableOpacity>
            }
            centerContainerStyle={SubscribeStyle.headerCenterContainer}
            rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Home') }}
          />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.loadData}
              />
            }>
            <View style={SubscribeStyle.mainLogoContainer}>
              <Image style={SubscribeStyle.mainLogoContainerImage} resizeMode='contain' source={require('../../Assets/Images/medicine-logo.png')} />
              <Text style={SubscribeStyle.title}>Subscribe</Text>
              <Text style={SubscribeStyle.description}>Sign up and receive products releases and special discounts delivered directly to your inbox!</Text>
              <Input
                value={this.state.email}
                containerStyle={SubscribeStyle.emailInput}
                placeholder='Your email address'
                placeholderTextColor='darkgrey'
                keyboardType='email-address'
                onChangeText={(v) => {
                  this.setState({email: v})
                }}
              />
              <Button
                title='SIGN UP'
                buttonStyle={SubscribeStyle.subscribeButton}
                titleStyle={SubscribeStyle.subscribeButtonText}
                onPress={() => this.requireSubscribe()}
              />
            </View>
          </ScrollView>
        </View>
      </ThemeProvider>
    )
  }
}

export default Subscribe;