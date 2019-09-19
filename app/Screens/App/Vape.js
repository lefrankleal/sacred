import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import VapeStyle from '../../Styles/VapeStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions } from 'react-navigation'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

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

  componentDidMount = () => {
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
      <SafeAreaView style={VapeStyle.container}>
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
        <ScrollView contentContainerStyle={VapeStyle.bodyContainer} >
          <Image style={VapeStyle.mainImage} source={this.state.vapeImages[item.title.split(" ")[0].toLowerCase()]} />
          <Text style={[VapeStyle.mainTitle, {color: item.color}]}>{item.title}</Text>
          <Text style={VapeStyle.mainSubTitle}>{item.small_subtitle}</Text>
          <Text style={[VapeStyle.subTitle, {color: item.color}]}>{item.subtitle}</Text>
          <Text style={VapeStyle.description}>{item.description}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Vape;