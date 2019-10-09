import React, { Component } from 'react'
import { View, Image, ImageBackground, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Feather'
// import CreateAccountStyle from '../../Styles/CreateAccountStyle'
import AsyncStorage from '@react-native-community/async-storage'

class CreateAccount extends Component {

  constructor(props) {
    super(props);
  }

  _goToHome = () => {
    AsyncStorage.setItem('isLogged', '1').then(() => {
      this.props.navigation.navigate('Home')
    })
  }

  render() {
    return (
      <Text>Create Account</Text>
    );
  }
}

export default CreateAccount;