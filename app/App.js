import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppStackNavigator from './config/Router';

const theme = {
  Input: {
    containerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
      marginVertical: 7,
    },
    inputContainerStyle: {
      borderBottomColor: 'rgba(255, 255, 255, 0)',
      height: 50,
    },
    inputStyle: {
      fontSize: 18,
      color: 'black',
      borderRadius: 0
    }
  },
  Text: {
    fontSize: 30,
  },
  Button: {
    containerStyle: {
      marginVertical: 7,
    },
    buttonStyle: {
      height: 50,
      borderRadius: 0,
      backgroundColor: '#BD742C',
    }
  },
  Icon: {
    color: 'white'
  }
};


class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <ThemeProvider theme={theme}>
        <AppStackNavigator />
      </ThemeProvider>
    );
  }
}

export default App;