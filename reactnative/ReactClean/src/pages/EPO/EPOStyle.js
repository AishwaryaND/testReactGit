import { Dimensions, StyleSheet } from 'react-native';


export const theme = {
  primaryColorOne: '#C92413',
  primaryColorTwo: '#D5613D',
  primaryColorThree: '#DBAD96',
  textColorOne: '#FFFFFF',
  textColorTwo: '#F2ECE4',
  secondaryColorOne: '#F6F9FB',
  cardBackground: '#F2ECE4',
  cardBackgroundDark: '#484848',
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: theme.secondaryColorOne,
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
    color: theme.textColorOne,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  textDesc: {
    color: theme.textColorTwo,
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
    backgroundColor: theme.cardBackground,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lightColorPaletteStyle: {
    backgroundColor: theme.cardBackground,
  },
  darkColorPaletteStyle: {
    backgroundColor: theme.cardBackgroundDark,
  },
});


export default styles;
