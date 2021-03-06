import React, { Component } from 'react'
import { Dimensions, Image, FlatList, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import VapeStyle from '../../Styles/VapeStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions } from 'react-navigation'

const { width, height } = Dimensions.get('screen')

class Vape extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vapeImages: {
        freedom: require(`../../Assets/Images/vape-freedom.jpg`),
        vision: require(`../../Assets/Images/vape-vision.jpg`),
        radiant: require(`../../Assets/Images/vape-radiant.jpg`),
        intuition: require(`../../Assets/Images/vape-intuition.jpg`),
        passion: require(`../../Assets/Images/vape-passion.jpg`),
        healing: require(`../../Assets/Images/vape-healing.jpg`)
      },
    }
  }

  _goTo = (view) => {
    if(view === 'back') {
      this.props.navigation.goBack()
    }else {
      this.props.navigation.navigate(view)
    }
  }

  render() {
    let item = this.props.navigation.state.params
    return (
      <SafeAreaView>
        <Header
          containerStyle={VapeStyle.headerContainer}
          placement="left"
          centerComponent={
            <TouchableOpacity onPress={() => this._goTo('Home')}>
              <Image style={VapeStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
            </TouchableOpacity>
          }
          centerContainerStyle={VapeStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('back') }}
        />
        <ScrollView contentContainerStyle={VapeStyle.bodyContainer}>
          <Image style={VapeStyle.mainImage} source={{ uri: item.picture.url}} />
          <Text style={[VapeStyle.mainTitle, {color: item.color}]}>{item.name}</Text>
          <Text style={VapeStyle.mainSubTitle}>{item.small_subtitle}</Text>
          <Text style={[VapeStyle.subTitle, {color: item.color}]}>{item.subtitle}</Text>
          <Text style={VapeStyle.description}>{item.description}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Vape;