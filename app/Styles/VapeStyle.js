import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const VapeStyle = StyleSheet.create({
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
  bodyContainer: {
    padding: 35,
    width: width
  },
  mainImage: {
    width: width * 0.7,
    maxHeight: width * 0.7,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  mainSubTitle: {
    fontSize: 20,
    color: '#BD742C'
  },
  subTitle: {
    fontSize: 24,
    marginTop: 20
  },
  description: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'justify',
  }
});
export default VapeStyle;