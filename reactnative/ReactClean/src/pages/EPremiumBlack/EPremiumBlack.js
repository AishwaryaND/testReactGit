

import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './EPremiumBlackStyle';

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    color: bgColor,
    textAlign: 'center',
  };
};

const EPremiumBlack: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <StatusBar backgroundColor="#434343" />
        <LinearGradient
          useAngle
          angle={150}
          colors={['#434343', '#252424', '#000000']}
          style={styles.gradientContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.textHead}>Hi, There</Text>
            <Text style={styles.textIntro}>I am an Premium Black Page</Text>
            <Text style={styles.textDesc}>
              I am a premium black theme. I am primarily a dark theme and come
              with a variety of color variants to be used in my theme. (Open my
              style.js to dig deeper! )
            </Text>
            <View style={styles.colorPaletteContainer}>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#434343')}>#434343</Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#252424')}>#252424</Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#000000')}>#000000</Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle('#FFFFFF')}>#FFFFFF</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
);

export default EPremiumBlack;
