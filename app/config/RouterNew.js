/**
 * Based on
 * https://www.reactnativeschool.com/complex-navigation-example-with-react-navigation
 * 
 * Example doesn't meet the requirements
 */
import React from 'react'
import { Dimensions, Image, Text, View } from "react-native";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerNavigation,
  DrawerItems,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather'

import Auth from '../Screens/Auth/Auth'
import CreateAccount from '../Screens/Auth/CreateAccount'
import ForgotPassword from '../Screens/Auth/ForgotPassword'
import ResetPassword from '../Screens/Auth/ResetPassword'
import SignIn from '../Screens/Auth/SignIn'

import Home from '../Screens/App/Home'
import Alerts from '../Screens/App/Alerts'
import Search from '../Screens/App/Search'
import Profile from '../Screens/App/Profile'
import Info from '../Screens/App/Info'

const width = Dimensions.get('screen').width

class DrawerHeaderComponent extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <View style={{
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: width
        }}>
          <Icon reverseColor name={'x'} size={50} color={'white'} style={{ position: 'absolute', right: 10, top: 10 }} onPress={() => this.props.navigation.toggleDrawer()} />
          <Image resizeMode='contain' style={{width: width * 0.5}} source={require('../Assets/Images/isotipo-white.png')} />
        </View>
        <DrawerItems {...this.props} style={{ flex: 3 }} />
        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Icon name={'instagram'} size={45} color={'white'} />
          <Icon name={'facebook'} size={45} color={'white'} />
          <Icon name={'youtube'} size={45} color={'white'} />
        </View>
      </View>
    )
  }
}

/**
* #537A23
* #745844
* #5C7E61
* #181D1E
* #BD742C
* #561D6A
* #7BC67B
* #61D1C9
*/

const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: Auth,
      navigationOptions: {
        headerTitle: 'Landing',
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerTitle: 'Sign In',
      },
    },
    CreateAccount: {
      screen: CreateAccount,
      navigationOptions: {
        headerTitle: 'Create Account',
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        headerTitle: 'Forgot Password',
      },
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: {
        headerTitle: 'Reset Password',
      },
    },
  }
)

const HomeStack = createStackNavigator(
  {
    Home,
    Alerts,
    Search,
    Profile,
    Info
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Home'
  }
)

// const AlertsStack = createStackNavigator(
//   {
//     Alerts,
//     Home,
//     Search,
//     Profile,
//     Info
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//   }
// )

// const SearchStack = createStackNavigator(
//   {
//     Search,
//     Home,
//     Alerts,
//     Profile,
//     Info
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//   }
// )

// const ProfileStack = createStackNavigator(
//   {
//     Profile,
//     Home,
//     Alerts,
//     Search,
//     Info
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//   }
// )

// const InfoStack = createStackNavigator(
//   {
//     Info,
//     Home,
//     Alerts,
//     Search,
//     Profile,
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//   }
// )

const MainTabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Alerts: Alerts,
    Search: Search,
    Profile: Profile,
    Info: Info
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log(routeName, focused)

        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home'
            break;
          case 'Alerts':
            iconName = 'bell'
            break;
          case 'Search':
            iconName = 'search'
            break;
          case 'Profile':
            iconName = 'user'
            break;
          case 'Info':
            iconName = 'info'
            break;
          default:
            iconName = ''
            break;
        }
        return <Icon reverseColor name={iconName} size={routeName === iconName ? 40 : 25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: '#BD742C',
        paddingBottom: 15,
        paddingTop: 15,
        height: 50
      },
      showLabel: false,
      activeTintColor: 'white',
      inactiveTintColor: 'lightgrey'
    },
    headerMode: 'none',
    mode: 'modal',
  }
)

const MainDrawer = createDrawerNavigator(
  {
    Home: MainTabs,
    Alerts: MainTabs,
    Search: MainTabs,
    Profile: MainTabs,
    Info: MainTabs,
  },
  {
    drawerWidth: width,
    drawerPosition: 'right',
    drawerBackgroundColor: 'black',
    contentComponent: DrawerHeaderComponent,
    contentOptions: {
      activeItemKey: ({navigation}) => {
        console.log(navigation)
      },
      labelStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: '300'
      },
      itemStyle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemsContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeLabelStyle: {
        borderBottomWidth: 1,
        borderColor: 'white'
      }
    }
  }
)

const App = createSwitchNavigator({
  Loading: {
    screen: Auth,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: MainDrawer,
  },
})

export default createAppContainer(App);