import React, { Component } from 'react'
import { View, Image, ImageBackground, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
// import ForgotPasswordStyle from '../../Styles/ForgotPasswordStyle'
import AsyncStorage from '@react-native-community/async-storage'

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>Forgot Password</Text>
    );
  }
}

export default ForgotPassword;