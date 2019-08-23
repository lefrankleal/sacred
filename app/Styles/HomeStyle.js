import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const HomeStyle = StyleSheet.create({
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
  SacredLifeStyleLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30
  },
  SacredLifeStyleText: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  SacredLifeStyleItems: {
    margin: 25,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  SacredLifeStyleItem: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  SacredLifeStyleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#BD742C'
  },
  SacredLifeStyleHeaderImage: {
    maxWidth: width * 0.9,
    maxHeight: 245
  },
  SacredLifeStyleContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 150
  },
  SacredLifeStyleContentImage: {
    flex: 1,
    width: '100%',
    maxHeight: 100
  },
  SacredLifeStyleContentTextTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5
  },
  SacredLifeStyleContentTextDescription: {
    fontWeight: 'normal',
    fontSize: 15,
    marginLeft: 5
  },
});
export default HomeStyle;