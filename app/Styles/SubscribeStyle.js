import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const SubscribeStyle = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1
  },
  headerContainer: {
    backgroundColor: 'transparent'
  },
  headerCenterContainer: {
    alignItems: 'center',
  },
  headerImage: {
    width: 150
  },
  mainLogoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: width * 0.05,
  },
  mainLogoContainerImage: {
    maxHeight: 150,
  },
  title: {
    fontSize: 22
  },
  description: {
    width: width * 0.9,
    fontSize: 18,
    textAlign: 'justify'
  },
  emailInputContainer: {
    width: width * 0.9
  },
  emailInput: {
    // fontSize: 15
  },
  emailLabelStyle: {
    backgroundColor: 'transparent'
  },
  subscribeButton: {
    borderRadius: 50,
    backgroundColor: '#BD742C',
    borderWidth: 3,
    borderColor: '#BD742C80'
  },
  subscribeButtonText: {
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    paddingVertical: 20,
    letterSpacing: 3
  },
});
export default SubscribeStyle;