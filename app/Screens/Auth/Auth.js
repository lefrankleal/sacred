import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Feather'
import AuthStyle from '../../Styles/AuthStyle'
import AsyncStorage from '@react-native-community/async-storage'
// import FBSDK from 'react-native-fbsdk'

class Auth extends Component {

  constructor(props) {
    super(props);
    setTimeout(() => {
      this._goToHome()
    }, 1000)
  }

  _checkLogin = () => {
    // FBSDK.AccessToken.refreshCurrentAccessTokenAsync().then(
    //   (resp) => {
    //     FBSDK.AccessToken.getCurrentAccessToken().then(
    //       (data) => {
    //         if (data && data.accessToken.toString()) {
    //           this.props.navigation.navigate('Home')
    //         } else {
    //           AsyncStorage.setItem('isLogged', '0').then(() => {
    //             this.props.navigation.navigate('Login')
    //           })
    //         }
    //       },
    //       (err) => {
    //         AsyncStorage.setItem('isLogged', '0').then(() => {
    //           this.props.navigation.navigate('Login')
    //         })
    //       }
    //     )
    //   },
    //   (err) => {
    //     AsyncStorage.setItem('isLogged', '0').then(() => {
    //       this.props.navigation.navigate('Login')
    //     })
    //   }
    // )
  }

  _goToHome = () => {
    console.log('feed')
    this.props.navigation.navigate('App')
  }

  componentDidMount = () => {
    AsyncStorage.getItem('isLogged').then((isLogged) => {
      if (isLogged === '1') {
        this.props.navigation.navigate('Login')
      } else {
        console.log('not logged');
      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <View style={AuthStyle.topBlock}>
          <Image style={ AuthStyle.topBlockImage } resizeMode='contain' source={require('../../Assets/Images/logo-text-vertical.png')} />
        </View>
        {/* <View style={AuthStyle.bottomBlock}> */}
          {/* <Button
            title='REGISTER'
            buttonStyle={AuthStyle.registerButton}
            titleStyle={AuthStyle.registerButtonText}
            onPress={() => this._fbLogin()}
          /> */}
          {/* <Button
            title='Continue without account >>'
            buttonStyle={AuthStyle.haveAccountButton}
            titleStyle={AuthStyle.haveAccountButtonText}
            onPress={this._goToHome}
          /> */}
          {/* <Button
            title='Already have an account >>'
            buttonStyle={AuthStyle.haveAccountButton}
            titleStyle={AuthStyle.haveAccountButtonText}
            onPress={this._goToHome}
          /> */}
        {/* </View> */}
      </View>
    )
  }
}

export default Auth;