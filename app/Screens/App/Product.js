import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, View, SafeAreaView } from 'react-native'
import { Header, Text } from 'react-native-elements'
import ProductStyle from '../../Styles/ProductStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Product extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
  }

  render() {
    return (
      <SafeAreaView style={ProductStyle.container}>
        <Header
          containerStyle={ProductStyle.headerContainer}
          placement="left"
          centerComponent={
            <TouchableOpacity onPress={() => this._goTo('Home')}>
              <Image style={ProductStyle.headerImage} resizeMode='contain' source={require('../../Assets/Images/logo-text-horizontal.png')} />
            </TouchableOpacity>
          }
          centerContainerStyle={ProductStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray' }}
          leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Shop') }}
        />
        <ScrollView>
          <View
            style={{ paddingHorizontal: 25 }} >
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>SHOP</Text>
          </View>
          <View style={{ height: 80, width: width }}>
            <Image style={{ width: '100%' }} source={require('../../Assets/Images/shop-banner.png')} />
          </View>
          <View
            style={{ paddingHorizontal: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>VAPE</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Luxurious All Natural Cannabis Oil</Text>
            <View
              style={{ flexDirection: 'column' }}>
              <Image style={{ borderRadius: 50, width: width - 40, height: width }} source={require('../../Assets/Images/product.png')} resizeMode='contain' />
              <Text>Feel the peace provided by the absolute relaxatiion of the body and mind, let the soft touch of Sacred Medicine free you from your emotional baggage to</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Product;