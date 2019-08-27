import React, { Component } from 'react'
import { Dimensions, SafeAreaView, Alert, Image, ScrollView, RefreshControl, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import RitualStyle from '../../Styles/RitualStyle'
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Globals from '../../config/Globals'
import Youtube from '../../Components/Youtube'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Ritual extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      items: []
    }
    this._getItems()
  }

  static navigationOptions = {
    drawerLabel: 'Sacred Rituals',
  }

  componentDidMount = () => {
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
  }

  _getItems = () => {
    this.setState({ refreshing: true })
    fetch(Globals.SEVER_API_URL + '/rituals', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json().then(
      json => ({
        url: res.url,
        headers: res.headers.map,
        status: {
          status: res.status,
          statusText: res.statusText || ''
        },
        body: json
      })
    )).then((res) => {
      this.setState({ refreshing: false })
      this.setState({ 'items': res.body })
    }).catch((error) => {
      this.setState({ refreshing: false })
      Alert.alert('Error', 'Something is wrong with your request, please verify you have network connection and be sure you have entered a valid URL')
    })
  }

  render() {
    return (
      <SafeAreaView style={RitualStyle.container}>
        <Header
          containerStyle={RitualStyle.headerContainer}
          placement="left"
          centerComponent={
            <TouchableOpacity onPress={() => this._goTo('Home')}>
              <Image style={RitualStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
            </TouchableOpacity>
          }
          centerContainerStyle={RitualStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Home') }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._getItems}
            />
          }>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sacred Rituals</Text>
          </View>
          <View style={{ height: 80, width: width }}>
            <Image style={{ width: '100%' }} source={require('../../Assets/Images/shop-banner.png')} />
          </View>
          <View style={RitualStyle.intro}>
            <Text style={RitualStyle.introTitle}>LET GO RITUAL | FORGIVENESS | HEAL YOUR NEGATIVE EMOTIONS | RELEASE TENSION | LET GO OF BODY ACHES AND PAINS</Text>
            <Text style={RitualStyle.introDescription}>
              Sacred Medicine’s rituals, meditations, and recipes can be considered elixirs that purify, restore, and balance the mind and blood flow, which significantly contribute to awakening the soul.
              {'\n'}
              It is essential to maintain this lifestyle as sacred, remembering that the sacred is divine, that we must treat it with respect and use it only when necessary.
              {'\n'}
              This way of living will help you enjoy a peaceful and harmonious life, with a joyful outlook, free of the toxic thoughts that can affect your health.
              {'\n'}
              Whatever the outcome you seek, Sacred Medicine will come first to cleanse your heart, then your thoughts and, finally, your body.
            </Text>
          </View>
          <View
            style={RitualStyle.ritualsContainer}>
            {this.state.items && this.state.items.length > 0 && this.state.items.map(
              (v, i) => {
                return (
                  <View key={i} style={{marginBottom: this.state.items[i].visible === true ? 10 : 0}}>
                    <TouchableOpacity style={RitualStyle.itemButton}
                      onPress={() => {
                        v = {
                          ...v,
                          visible: v.visible === true ? false : true
                        }
                        let items = this.state.items
                        items[i] = v
                        this.setState({ items: items })
                      }}>
                      <Text style={RitualStyle.itemName}>{v.name}</Text>
                      <Icon
                        name={this.state.items[i].visible === true ? 'chevron-down' : 'chevron-right'}
                        color='white'
                        size={30}
                      />
                    </TouchableOpacity>
                    {this.state.items[i].visible &&
                      <View>
                        <Text style={RitualStyle.itemDescription}>{v.description}</Text>
                        <Youtube video={v.video.id} />
                      </View>
                    }
                  </View>
                )
              }
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Ritual;