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
    fontSize: 20
  },
  introDescription: {
    fontSize: 15
  },
  ritualsContainer: {
    marginHorizontal: width * 0.05,
    marginVertical: 30
  },
  itemButton: {
    backgroundColor: '#BD742C',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  itemDescription: {
    fontWeight: 'bold',
    fontSize: 12,
    padding: 15
  },
});
export default RitualStyle;