import React, { Component } from 'react'
import { Dimensions, RefreshControl, Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HomeStyle from '../../Styles/HomeStyle'
import Youtube from '../../Components/Youtube'
import { DrawerActions } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Home extends Component {

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
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
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
            <Text style={HomeStyle.introductionText}>
              Since the dawn of time, nature has generously provided us with an abundance of all we need to heal our body and soul,
              both physically and spiritually, such as the miraculous cannabis plant.
                {'\n\n'}
              That is why at Astral Med, we turn cannabis into
              </Text>
          </View>
          <View style={HomeStyle.SacredLifeStyleLogo}>
            <Image style={{ height: 80, width: width * 0.8 }} resizeMode='contain' source={require('../../Assets/Images/sacred-lifestyle-logo.png')} />
          </View>
          <View>
            <Text style={HomeStyle.SacredLifeStyleText}>It’s time to start using our intuition and take control of our being while working towards more important and transcendent goals. The time has come to return to Mother Earth all that she gives us in abundance by beginning to practice a SACRED lifestyle that allows us to live in peace and harmony with a joyful outlook that frees your spirit and drives your creativity towards a true spiritual awakening!</Text>
          </View>
          <View style={HomeStyle.SacredLifeStyleItems}>
            <TouchableOpacity style={HomeStyle.SacredLifeStyleItem}>
              <View style={HomeStyle.SacredLifeStyleHeader}>
                <Image style={HomeStyle.SacredLifeStyleHeaderImage} source={require('../../Assets/Images/innovation.jpg')} />
              </View>
              <View style={HomeStyle.SacredLifeStyleContent}>
                <Image style={HomeStyle.SacredLifeStyleContentImage} resizeMode='contain' source={require('../../Assets/Images/innovation-logo.png')} />
                <View style={{ flex: 4 }}>
                  <Text style={HomeStyle.SacredLifeStyleContentTextTitle}>Innovation</Text>
                  <Text style={HomeStyle.SacredLifeStyleContentTextDescription}>
                    Innovation fuels our daily life. By recognizing its power and creativity we shape the future with a holistic approach.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.SacredLifeStyleItem} onPress={() => this._goTo('About')}>
              <View style={HomeStyle.SacredLifeStyleHeader}>
                <Image style={HomeStyle.SacredLifeStyleHeaderImage} resizeMode='contain' source={require('../../Assets/Images/products.jpg')} />
              </View>
              <View style={HomeStyle.SacredLifeStyleContent}>
                <Image style={HomeStyle.SacredLifeStyleContentImage} resizeMode='contain' source={require('../../Assets/Images/products-logo.png')} />
                <View style={{ flex: 4 }}>
                  <Text style={HomeStyle.SacredLifeStyleContentTextTitle}>Products</Text>
                  <Text style={HomeStyle.SacredLifeStyleContentTextDescription}>
                    We are committed to work everyday setting forth our knowledge and industry’s best practices to our customers. By utilizing science we create products that help people live better lives.
                </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.SacredLifeStyleItem}>
              <View style={HomeStyle.SacredLifeStyleHeader}>
                <Image style={HomeStyle.SacredLifeStyleHeaderImage} resizeMode='contain' source={require('../../Assets/Images/sustainability.jpg')} />
              </View>
              <View style={HomeStyle.SacredLifeStyleContent}>
                <Image style={HomeStyle.SacredLifeStyleContentImage} resizeMode='contain' source={require('../../Assets/Images/sustainability-logo.png')} />
                <View style={{ flex: 4 }}>
                  <Text style={HomeStyle.SacredLifeStyleContentTextTitle}>Sustainability</Text>
                  <Text style={HomeStyle.SacredLifeStyleContentTextDescription}>
                    For Sacred Medicine, sustainability means shaping the future with responsibility and commitment with Mother Earth as an integral part of our corporate strategy.
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home;