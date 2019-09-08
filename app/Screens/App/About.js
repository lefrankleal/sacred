import React, { Component } from 'react'
import { FlatList, RefreshControl, Image, ScrollView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AboutStyle from '../../Styles/AboutStyle'
import { DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      vapeIcons: {
        freedom: require(`../../Assets/Images/vape-vector-freedom.png`),
        vision: require(`../../Assets/Images/vape-vector-vision.png`),
        radiant: require(`../../Assets/Images/vape-vector-radiant.png`),
        intuition: require(`../../Assets/Images/vape-vector-intuition.png`),
        passion: require(`../../Assets/Images/vape-vector-passion.png`),
        healing: require(`../../Assets/Images/vape-vector-healing.png`)
      },
      vapes: []
    }
  }

  componentDidMount = () => {
    this.loadVapes()
  }

  loadVapes = () => {
    this.setState({ refreshing: true })
    fetch(Globals.SEVER_API_URL + '/information', {
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
      this.setState({ 'vapes': res.body })
    }).catch((error) => {
      this.setState({ refreshing: false })
      Alert.alert('Error', 'Something is wrong with your request, please verify you have network connection and be sure you have entered a valid URL')
    })
  }

  _goTo = (view, item = {}) => {
    this.props.navigation.navigate(view, {...item})
  }

  render() {
    return (
      <View style={AboutStyle.container}>
        <Header
          containerStyle={AboutStyle.headerContainer}
          placement="left"
          centerComponent={
            <TouchableOpacity onPress={() => this._goTo('Home')}>
              <Image style={AboutStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
            </TouchableOpacity>
          }
          centerContainerStyle={AboutStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Home') }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
            <View style={AboutStyle.headContainer}>
              <Image style={AboutStyle.headImage} resizeMode='contain' source={require('../../Assets/Images/medicine.png')} />
              <Text style={AboutStyle.headTitle}>Purify, restore and deliver equilibrium to the body, mind and soul.</Text>
              <Text style={AboutStyle.headDescription}>
                When cannabis is organic and used with the intention and respect it deserves, it activates the pineal gland and the third eye or intuition, leading us towards our spiritual evolution.
                {'\n'}
                Throughout this process, the intention with which you use this plant will be fundamental to your growth, progress, and evolution, enhancing all your senses and allowing your intuition to guide you instead of everything else around you.
                {'\n'}
                Discover a new way to achieve mental clarity, harmony, and to awaken your potential to reconnect with yourself through each product offered by Sacred Medicine!
              </Text>
            </View>
            <View style={AboutStyle.bodyContent}>
              <Text style={AboutStyle.bodyTitle}>VAPE</Text>
              <Text style={AboutStyle.bodySubtitle}>Luxurious All Natural Cannabis Oil</Text>
              <Image style={AboutStyle.bodyImage} source={require('../../Assets/Images/vape-line.jpg')} />
            </View>
            <View style={AboutStyle.bodyFooter}>
              {this.state.vapes && this.state.vapes.map(
                (item, i) => {
                  return (
                    <TouchableOpacity key={i} style={AboutStyle.bodyFooterItem} onPress={() => this._goTo('Vape', item)}>
                      <Image style={{ width: 40, height: 40 }} resizeMode='contain' source={this.state.vapeIcons[item.title.split(" ")[0].toLowerCase()]} />
                      <Text style={{color: item.color, fontSize: 20, fontWeight: 'bold'}}>{item.title.split(" ")[0]}</Text>
                      <Icon name="chevron-right" color={item.color} size={20}/>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default About;