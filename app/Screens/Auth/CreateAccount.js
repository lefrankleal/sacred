import React, { Component } from 'react'
import { View, Image, ImageBackground, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Feather'
// import CreateAccountStyle from '../../Styles/CreateAccountStyle'
import AsyncStorage from '@react-native-community/async-storage'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

class CreateAccount extends Component {

  constructor(props) {
    super(props);
  }

  _goToHome = () => {
    AsyncStorage.setItem('isLogged', '1').then(() => {
      this.props.navigation.navigate('Home')
    })
  }

  _fbLogin = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              AsyncStorage.multiSet([['loginType', 'facebook'], ['fbToken', data.accessToken.toString()]]).then(() => {
                this._goToHome()
              })
            }
          )
        }
      },
      (error) => {
        Alert.alert('Upss...', 'Hubo un problema iniciando tu sesion de facebook, intenta de nuevo.')
      }
    );
  }

  render() {
    return (
      <Text>Create Account</Text>
    );
  }
}

export default CreateAccount;