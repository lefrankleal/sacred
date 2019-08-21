import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const CategoryDescriptionStyle = StyleSheet.create({
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
    marginHorizontal: 25,
    marginBottom: 20
  },
  MiddleButtons: {
    backgroundColor: '#561D6A',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 100,
    paddingVertical: 10
  },
  CategoryButtons: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  }
});
export default CategoryDescriptionStyle;