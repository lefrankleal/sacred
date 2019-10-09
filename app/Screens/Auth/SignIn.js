import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'

class SignIn extends Component {

  constructor(props) {
    super(props);
  }

  _goToHome = () => {
    AsyncStorage.setItem('isLogged', '1').then(() => {
      this.props.navigation.navigate('Home')
    })
  }

  _fbLogin = () => {
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <View style={LoginStyle.topBlock}>
          <Image source={require('../../Assets/Images/logo.png')} />
        </View>
        <View style={LoginStyle.bottomBlock}>
          <Text style={LoginStyle.welcomeText}>BIENVENIDOS</Text>
          <Button
            title='INICIAR'
            buttonStyle={LoginStyle.loginFbButton}
            titleStyle={LoginStyle.welcomeText}
            icon={
              <Icon
                name="facebook"
                size={LoginStyle.welcomeText.fontSize}
                color="white"
              />
            }
            iconRight
            onPress={() => this._fbLogin()}
          />
          <Button
            title='INGRESAR SIN REGISTRO'
            buttonStyle={LoginStyle.loginButton}
            titleStyle={LoginStyle.welcomeText}
            onPress={this._goToHome}
          />
        </View>
      </View>
    );
  }
}

export default SignIn;