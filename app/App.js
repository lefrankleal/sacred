import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppStackNavigator from './config/RouterNew';
import Globals from './config/Globals';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <ThemeProvider theme={Globals.THEME}>
        <AppStackNavigator />
      </ThemeProvider>
    );
  }
}

export default App;