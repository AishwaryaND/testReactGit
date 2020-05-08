

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './ESPStyle';

const theme = {
  primaryColorOne: '#fb7a8f',
  primaryColorTwo: '#fdd6bd',
  textColorOne: '#fcfcfc',
  textColorTwo: '#FFFFFF',
  secondaryColorOne: '#484848',
};

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    color: bgColor,
    textAlign: 'center',
  };
};


const ESP: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <StatusBar backgroundColor={theme.primaryColorOne} />
        <LinearGradient
          useAngle
          angle={140}
          colors={[theme.primaryColorOne, theme.primaryColorTwo]}
          style={styles.gradientContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.textHead}>Hi, There</Text>
            <Text style={styles.textIntro}>I am a Soothing Pink Page</Text>
            <Text style={styles.textDesc}>
              I am Soothing Pink theme. I am a colorful theme and with my base
              colors setup on the shades of pink. I work very well for
              ecommerce, music, health apps.(Open my style.js to dig deeper! )
            </Text>
            <View style={styles.colorPaletteContainer}>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle(theme.primaryColorOne)}>
                  {theme.primaryColorOne}
                </Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle(theme.primaryColorTwo)}>
                  {theme.primaryColorTwo}
                </Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle(theme.textColorOne)}>
                  {theme.textColorOne}
                </Text>
              </View>
              <View style={styles.colorPaletteStyle}>
                <Text style={colorPaletteTextStyle(theme.textColorTwo)}>
                  {theme.textColorTwo}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
);

export default ESP;
