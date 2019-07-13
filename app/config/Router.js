import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Home from '../Screens/Home'
import Auth from '../Screens/Auth'
import Login from '../Screens/Login'
import Icon from 'react-native-vector-icons/Feather'

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'HomeStack':
            iconName = 'mic'
            break;
          default:
            iconName = ''
            break;
        }
        return <Icon name={iconName} size={40} color={tintColor} />
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#33424C',
        paddingBottom: 15,
        paddingTop: 15,
        height: 70
      },
      showLabel: false,
      activeTintColor: '#009BD0',
      inactiveTintColor: 'white',
    },
    headerMode: 'none',
    mode: 'modal',
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      Home: BottomTabNavigator,
      Login: Login
    }
  )
)