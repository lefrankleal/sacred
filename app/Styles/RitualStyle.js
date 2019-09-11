import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const RitualStyle = StyleSheet.create({
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
  intro: {
    marginHorizontal: width * 0.05,
    alignItems: 'center'
  },
  introTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10
  },
  introDescription: {
    fontSize: 18,
    textAlign: 'justify'
  },
  ritualsContainer: {
    marginHorizontal: width * 0.05,
    marginVertical: 30
  },
  itemContainer: {
    marginVertical: 30
  },
  itemCategory: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingVertical: 5,
    textAlign: 'center'
  },
  itemName: {
    fontSize: 20,
    color: '#c88a3d',
    paddingVertical: 5,
    textAlign: 'center'
  },
  itemDescription: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 15
  },
});
export default RitualStyle;