import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const AboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
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
    flex: 1,
    marginHorizontal: width * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  headImage: {
    width: width * 0.6,
    maxHeight: width * 0.6,
  },
  headTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headDescription: {
    fontSize: 18,
    textAlign: 'justify',
  },
  bodyContent: {
    justifyContent: 'flex-start',
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
    width: width,
    maxHeight: 300,
    resizeMode: 'contain',
  },
  bodyFooter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  bodyFooterItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.5,
    marginVertical: 5
  }
});
export default AboutStyle;
