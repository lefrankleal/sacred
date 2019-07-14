import React, { Component } from 'react'
import { Dimensions, RefreshControl, Image, ScrollView, SafeAreaView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import ShopStyle from '../Styles/ShopStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class Shop extends Component {

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
      <SafeAreaView style={ShopStyle.container}>
        <Header
          containerStyle={ShopStyle.headerContainer}
          placement="left"
          centerComponent={<Image style={ShopStyle.headerImage} resizeMode='contain' source={require('../Assets/Images/logo-text-horizontal.png')} />}
          centerContainerStyle={ShopStyle.headerCenterContainer}
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
          <View
            style={{ paddingHorizontal: 25 }} >
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>SHOP</Text>
          </View>
          <View style={{ height: 120, width: '100%' }}>
            <Image style={{ width: '100%' }} resizeMode='contain' source={require('../Assets/Images/shop-banner.png')} />
          </View>
          <View
            style={{ paddingHorizontal: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>VAPE</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Luxurious All Natural Cannabis Oil</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Healing vape</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Freedom vape</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Intuition vape</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Passion vape</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Intuition vape</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Passion vape</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Intuition vape</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this._goTo('Product')}
                style={{ width: (width / 2) - 25, height: (width / 3) + 25 }}>
                <Image style={{ borderRadius: 50, borderWidth: 2, borderColor: '#BD742C', width: (width / 2) - 40, height: (width / 3) }} source={require('../Assets/Images/product.png')} resizeMode='contain' />
                <Text>Passion vape</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Shop;