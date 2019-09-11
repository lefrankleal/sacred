import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const AboutStyle = StyleSheet.create({
  container: {
    flex: 2,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headImage: {
    width: width * 0.6,
    maxHeight: width * 0.6,
    marginVertical: 20
  },
  headTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headDescription: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'justify',
  },
  bodyContent: {
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    maxHeight: width * 0.8,
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
    width: width,
    maxHeight: 300,
    resizeMode: 'contain'
  },
  bodyFooter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30
  },
  bodyFooterItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.5,
    paddingVertical: 5
  }
});
export default AboutStyle;