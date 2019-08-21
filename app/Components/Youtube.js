import React, { Component } from 'react'
import { Image, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Globals from '../config/Globals'
import { YouTubeStandaloneAndroid, YouTubeStandaloneIOS } from 'react-native-youtube'
import Icon from 'react-native-vector-icons/Feather'

class Youtube extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Platform.OS === 'ios' ?
            YouTubeStandaloneIOS.playVideo(this.props.video)
              .then(() => console.log('Standalone Player Exited'))
              .catch(errorMessage => console.error(errorMessage))
            :
            YouTubeStandaloneAndroid.playVideo({
              apiKey: Globals.YOUTUBE_APIKEY,
              videoId: this.props.video,
              autoplay: true,
              lightboxMode: false,
            })
              .then(() => console.log('Android Standalone Player Finished'))
              .catch(errorMessage => this.setState({ error: errorMessage }))
        }}
      >
        <Icon
          name="youtube"
          size={100}
          color="white"
          style={{ position: 'absolute', zIndex: 1, alignSelf: 'center', top: 75 }}
        />
        <Image style={{ alignSelf: 'stretch', height: 250, borderRadius: 5, overflow: 'hidden' }} source={{ uri: (`http://img.youtube.com/vi/${this.props.video}/hqdefault.jpg`) }} />
      </TouchableOpacity>
    )
  }
}

export default Youtube;