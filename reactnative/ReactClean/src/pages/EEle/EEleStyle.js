import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  skewContainer: {
    backgroundColor: '#5c258d',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    left: Dimensions.get('window').width * -0.2,
    top: Dimensions.get('window').height * -0.1,
    transform: [{ rotateZ: '-20deg' }],
    opacity: 0.5,
  },
  skewContainerTwo: {
    backgroundColor: '#4389a2',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    left: Dimensions.get('window').width * -0.1,
    top: Dimensions.get('window').height * -0.16,
    transform: [{ rotateZ: '15deg' }],
    opacity: 0.5,
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
});

export default styles;
