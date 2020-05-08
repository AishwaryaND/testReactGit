import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#202020',
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    zIndex: 2,
    paddingTop: Dimensions.get('window').height * 0.1,
    paddingLeft: Dimensions.get('window').width * 0.05,
    paddingRight: Dimensions.get('window').width * 0.05,
  },
  gradientContainer: {
    flex: 1,
    height: '100%',
  },
  textHead: {
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textIntro: {
    color: '#F6F9FB',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  textDesc: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 10,
  },
  colorPaletteContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height * 0.01,
    flexWrap: 'wrap',
    padding: 10,
  },
  colorPaletteStyle: {
    padding: 20,
    marginBottom: 10,
    width: '45%',
    backgroundColor: '#dcdcdc',
    // flex: 1,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default styles;
