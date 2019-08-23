import React, { Component } from 'react'
import { FlatList, RefreshControl, Image, ScrollView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AboutStyle from '../../Styles/AboutStyle'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      video: '',
      playerVisible: false
    }
  }

  componentDidMount = () => {
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
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
          rightComponent={{ icon: 'menu', color: 'gray' }}
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
              <Text style={AboutStyle.bodyFooter}>Freedom | Vision | Radiant</Text>
              <Text style={AboutStyle.bodyFooter}>Intuition | Passion | Healing</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default About;