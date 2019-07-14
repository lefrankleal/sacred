import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const ProductStyle = StyleSheet.create({
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
  Introduction: {
    marginHorizontal: 50
  },
  MiddleButtons: {
    backgroundColor: '#561D6A',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
    paddingVertical: 10
  },
  CategoryButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10
  }
});
export default ProductStyle;