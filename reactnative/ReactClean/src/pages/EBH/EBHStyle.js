import { Dimensions, StyleSheet } from 'react-native';


export const theme = {
  primaryColorOne: '#155F9D',
  primaryColorTwo: '#5F9BA9',
  primaryColorThree: '#A3D4DE',
  textColorOne: '#FFFFFF',
  textColorTwo: '#484848',
  secondaryColorOne: '#F6F9FB',
  cardBackground: '#F6F9FB',
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F6F9FB',
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    zIndex: 2,
    paddingTop: Dimensions.get('window').height * 0.1,
  },
  gradientContainer: {
    flex: 1,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
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
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lightColorPaletteStyle: {
    backgroundColor: theme.cardBackground,
  },
  darkColorPaletteStyle: {
    backgroundColor: theme.textColorTwo,
  },
});

export default styles;
