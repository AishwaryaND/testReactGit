import { Dimensions, StyleSheet } from 'react-native';

export const theme = {
  primaryColorOne: '#233ea1',
  primaryColorTwo: '#e0f3ff',
  textColorOne: '#252424',
  textColorTwo: '#484848',
  secondaryColorOne: '#FFFFFF',
  cardBackground: '#adadad',
};


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
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
    color: theme.primaryColorOne,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  textIntro: {
    color: theme.textColorOne,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  textDesc: {
    color: theme.textColorTwo,
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
    backgroundColor: theme.cardBackground,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  shapeBlobOne: {
    position: 'absolute',
    bottom: 20,
    right: 50,
    opacity: 0.4,
  },
  shapeBlobCorner: {
    position: 'absolute',
    bottom: -Dimensions.get('window').height * 0.6,
    left: -Dimensions.get('window').width * 0.5,
  },
  shapeBlobCornerTopRight: {
    position: 'absolute',
    top: -Dimensions.get('window').height * 0.5,
    right: -Dimensions.get('window').width * 0.6,
  },
  shapeSmallCircle: {
    position: 'absolute',
    bottom: -Dimensions.get('window').height * 0.5,
    left: Dimensions.get('window').width * 0.01,
    opacity: 0.5,
  },
});

export default styles;
