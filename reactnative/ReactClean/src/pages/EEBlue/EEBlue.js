

import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './EEBlueStyle';

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    color: bgColor,
    textAlign: 'center',
  };
};


const EEBlue: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <StatusBar backgroundColor="#09203f" />
        <LinearGradient
          useAngle
          angle={140}
          colors={['#09203f', '#0d2240', '#263846']}
          style={styles.gradientContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.textHead}>Hi, There</Text>
            <Text style={styles.textIntro}>I am an Eternal Blue Page</Text>
            <Text style={styles.textDesc}>
              I am an eternal blue theme. I am primarily a dark theme and come
              with a variety of color variants to be used in my theme. (Open my
              style.js to dig deeper! )
            </Text>
            <View style={styles.colorPaletteContainer}>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#09203f')}>#09203f</Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#0d2240')}>#0d2240</Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#263846')}>#263846</Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#F6F9FB')}>#F6F9FB</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
);


export default EEBlue;
