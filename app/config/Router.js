import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, DrawerNavigator } from 'react-navigation'
import Home from '../Screens/Home'
import Alerts from '../Screens/Alerts'
import Search from '../Screens/Search'
import Profile from '../Screens/Profile'
import Info from '../Screens/Info'
import Shop from '../Screens/Shop'
import Product from '../Screens/Product'
import Ritual from '../Screens/Ritual'
import Auth from '../Screens/Auth'
import Login from '../Screens/SignIn'
import Icon from 'react-native-vector-icons/Feather'

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

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Shop: Shop,
    Product: Product,
    Ritual: Ritual
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const AlertsStack = createStackNavigator(
  {
    Home: Alerts
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const SearchStack = createStackNavigator(
  {
    Home: Search
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const ProfileStack = createStackNavigator(
  {
    Home: Profile
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const InfoStack = createStackNavigator(
  {
    Home: Info
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
)

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    AlertsStack,
    SearchStack,
    ProfileStack,
    InfoStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'HomeStack':
            iconName = 'home'
            break;
          case 'AlertsStack':
            iconName = 'bell'
            break;
          case 'SearchStack':
            iconName = 'search'
            break;
          case 'ProfileStack':
            iconName = 'user'
            break;
          case 'InfoStack':
            iconName = 'info'
            break;
          case 'ShopStack':
            iconName = 'shop'
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

const Drawer = DrawerNavigator({
  Stack : { screen : HomeStack },
  Tabs : { screen : BottomTabNavigator }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      Home: Drawer,
      Login: Login
    }
  )
)