import React, { Component } from 'react'
import { FlatList, RefreshControl, Image, ScrollView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HomeStyle from '../Styles/HomeStyle'

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

  render() {
    return (
      <View style={HomeStyle.container}>
        <Header
          containerStyle={HomeStyle.headerContainer}
          placement="left"
          centerComponent={{ text: '', style: HomeStyle.headerTitle }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
            <Text>Alert view</Text>
        </ScrollView>
      </View>
    )
  }
}

export default Home;