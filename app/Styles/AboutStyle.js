import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const AboutStyle = StyleSheet.create({
  container: {
    flex: 1,
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
  headContainer: {
    marginHorizontal: width * 0.05,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headImage: {
    maxWidth: '70%',
    borderBottomColor: 'red'
  },
  headTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headDescription: {
    fontSize: 15,
    marginBottom: 30
  },
  bodyContent: {
    height: 420,
    marginHorizontal: width * 0.05,
    alignItems: 'center',
  },
  bodyTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  bodySubtitle: {
    fontSize: 18,
    color: '#BD742C'
  },
  bodyImage: {
    width: '100%',
    maxHeight: 300,
    resizeMode: 'contain'
  },
  bodyFooter: {
    fontSize: 18,
    color: '#BD742C'
  },
});
export default AboutStyle;