import React, { Component } from 'react'
import { SafeAreaView, Dimensions, RefreshControl, Image, ScrollView, View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import RitualStyle from '../Styles/RitualStyle'
import Icon from 'react-native-vector-icons/Feather'

class Ritual extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      video: '',
      playerVisible: false,
      textVisible: false
    }
  }

  componentDidMount = () => {
  }

  _goTo = (view) => {
    this.props.navigation.navigate(view)
  }

  _toggleText = () => {
    this.setState({textVisible: !this.state.textVisible})
  }

  render() {
    return (
      <SafeAreaView style={RitualStyle.container}>
        <Header
          containerStyle={RitualStyle.headerContainer}
          placement="left"
          centerComponent={<Image style={RitualStyle.headerImage} resizeMode='contain' source={require('../Assets/Images/logo-text-horizontal.png')} />}
          centerContainerStyle={RitualStyle.headerCenterContainer}
          rightComponent={{ icon: 'menu', color: 'gray' }}
          leftComponent={{ icon: 'arrow-back', color: 'gray', onPress: () => this._goTo('Home') }}
        />
        <ScrollView>
          <View
            style={{ paddingHorizontal: 25 }} >
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sacred Rituals</Text>
          </View>
          <View style={{ height: 120, width: '100%' }}>
            <Image style={{ width: '100%' }} resizeMode='contain' source={require('../Assets/Images/shop-banner.png')} />
          </View>
          <View
            style={{ paddingHorizontal: 25 }}>
              <View>
                <View style={{ backgroundColor: '#BD742C', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RITUAL 1</Text>
                  <Icon
                    name={this.state.textVisible === true ? 'chevron-down' : 'chevron-right'}
                    color='white'
                    size={30}
                    onPress={ () => {
                      this._toggleText()
                    }}
                  />
                </View>
                {this.state.textVisible &&
                  <Text style={{ fontWeight: 'bold', fontSize: 12, padding: 15 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet dolorem eaque atque quos debitis unde perferendis magnam porro commodi! Doloremque magni dolore hic praesentium aliquam sequi tempore dolorem eos?  </Text>
                }
              </View>
              <View>
                <View style={{ backgroundColor: '#BD742C', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RITUAL 2</Text>
                  <Icon
                    name='chevron-right'
                    color='white'
                    size={30}
                  />
                </View>
              </View>
              <View>
                <View style={{ backgroundColor: '#BD742C', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RITUAL 3</Text>
                  <Icon
                    name='chevron-right'
                    color='white'
                    size={30}
                  />
                </View>
              </View>
              <View>
                <View style={{ backgroundColor: '#BD742C', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RITUAL 4</Text>
                  <Icon
                    name='chevron-right'
                    color='white'
                    size={30}
                  />
                </View>
              </View>
              <View>
                <View style={{ backgroundColor: '#BD742C', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RITUAL 5</Text>
                  <Icon
                    name='chevron-right'
                    color='white'
                    size={30}
                  />
                </View>
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Ritual;