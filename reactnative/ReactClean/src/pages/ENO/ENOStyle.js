import { Dimensions, StyleSheet } from 'react-native';

export const theme = {
  primaryColorOne: '#08090B',
  textColorOne: '#FD8E4B',
  textColorTwo: '#B4693D',
  secondaryColorOne: '#FFFFFF',
  cardBackground: '#485563',
};


const styles = StyleSheet.create({
  parent: {
    backgroundColor: theme.primaryColorOne,
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    zIndex: 2,
    paddingTop: Dimensions.get('window').height * 0.1,
    paddingLeft: Dimensions.get('window').width * 0.05,
    paddingRight: Dimensions.get('window').width * 0.05,
  },
  textHead: {
    color: theme.textColorOne,
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
  topShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height * 0.6,
  },
});

export default styles;
