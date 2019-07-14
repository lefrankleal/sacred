import React, { Component } from 'react'
import { FlatList, RefreshControl, Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HomeStyle from '../Styles/HomeStyle'
import YouTube from 'react-native-youtube'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends Component {

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
    console.log(view)
    this.props.navigation.navigate(view)
  }

  render() {
    return (
      <SafeAreaView style={HomeStyle.container}>
        <Header
          containerStyle={HomeStyle.headerContainer}
          placement="left"
          centerComponent={ <Image style={HomeStyle.headerImage} resizeMode='contain' source={require('../Assets/Images/logo-text-horizontal.png')} />}
          centerContainerStyle={HomeStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray' }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
            <View style={ HomeStyle.Introduction}>
              <YouTube
                videoId="KVZ-P-ZI6W4"   // The YouTube video ID
                play={true}             // control playback of video with true/false
                style={{ alignSelf: 'stretch', height: 250, borderRadius: 5 }}
              />
              <Text>
                Since the dawn of time, nature has generously provided us with an abundance of all we need to heal our body and soul,
                both physically and spiritually, such as the miraculous cannabis plant.
                {'\n\n'}
                That is why at Astral Med, we turn cannabis into
              </Text>
            </View>
            <View style={HomeStyle.MiddleButtons}>
              <TouchableOpacity onPress={() => this._goTo('Shop')}>
                <Image style={{ height: 80 }} resizeMode='contain' source={require('../Assets/Images/shop.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._goTo('Ritual')}>
                <Image style={{ height: 80 }} resizeMode='contain' source={require('../Assets/Images/rituals.png')} />
              </TouchableOpacity>
            </View>
            <View style={HomeStyle.CategoryButtons}>
                <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../Assets/Images/agriculture.png')} />
                <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../Assets/Images/medicine.png')} />
                <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../Assets/Images/beauty.png')} />
            </View>
            <View style={HomeStyle.CategoryButtons}>
              <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../Assets/Images/architecture.png')} />
              <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../Assets/Images/nutrition.png')} />
              <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../Assets/Images/design.png')} />
            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home;