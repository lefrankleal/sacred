import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const AuthStyle = StyleSheet.create({
  topBlock: {
    alignItems: 'center',
    top: height * 0.08,
    height: height * 0.4
  },
  topBlockImage: {
    width: width * 0.8,
    height: height * 0.4
  },
  bottomBlock: {
    paddingHorizontal: 35,
    width: '100%',
    position: 'absolute',
    bottom: height * 0.15
  },
  registerButton: {
    borderRadius: 50,
    backgroundColor: '#BD742C'
  },
  registerButtonText: {
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'lightgrey',
    paddingVertical: 20,
    letterSpacing: 3
  },
  haveAccountButton: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  haveAccountButtonText: {
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
    paddingVertical: 20
  },
});
export default AuthStyle;