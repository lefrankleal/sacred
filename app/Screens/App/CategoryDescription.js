import React, { Component } from 'react'
import { Dimensions, RefreshControl, Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Youtube from '../Components/Youtube'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class CategoryDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      playerVisible: false
    }
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
          centerComponent={<Image style={HomeStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />}
          centerContainerStyle={HomeStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray' }}
          leftComponent={{ icon: 'arrow-back', color: 'transparent' }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadData}
            />
          }>
          <View style={HomeStyle.Introduction}>
            <Youtube video='uQaQVSRak4E' />
            <Text>
              Since the dawn of time, nature has generously provided us with an abundance of all we need to heal our body and soul,
              both physically and spiritually, such as the miraculous cannabis plant.
                {'\n\n'}
              That is why at Astral Med, we turn cannabis into
              </Text>
          </View>
          <View style={HomeStyle.MiddleButtons}>
            <TouchableOpacity
              style={{
                width: width / 2,
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => this._goTo('Shop')}>
              <Image style={{ width: 80 }} resizeMode='contain' source={require('../../Assets/Images/shop.png')} />
              <Text style={{ color: 'white', marginLeft: 10, fontWeight: '200', fontSize: 20 }}>Shop{'\n'}Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: width / 2,
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => this._goTo('Ritual')}>
              <Image style={{ width: 80 }} resizeMode='contain' source={require('../../Assets/Images/rituals.png')} />
              <Text style={{ color: 'white', marginLeft: 10, fontWeight: '200', fontSize: 20 }}>Sacred{'\n'}Rituals</Text>
            </TouchableOpacity>
          </View>
          <View style={HomeStyle.CategoryButtons}>
            <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../../Assets/Images/agriculture.png')} />
            <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../../Assets/Images/medicine.png')} />
            <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../../Assets/Images/beauty.png')} />
          </View>
          <View style={HomeStyle.CategoryButtons}>
            <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../../Assets/Images/architecture.png')} />
            <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../../Assets/Images/nutrition.png')} />
            <Image style={{ height: 80, width: 100 }} resizeMode='contain' source={require('../../Assets/Images/design.png')} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default CategoryDescription;