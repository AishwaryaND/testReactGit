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

import styles from './EBHStyle';
import { theme } from './EBHStyle';

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    fontWeight: 'bold',
    color: bgColor,
    textAlign: 'center',
  };
};

const EBH: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <StatusBar backgroundColor={theme.primaryColorOne} />
        <LinearGradient
          colors={[
            theme.primaryColorOne,
            theme.primaryColorTwo,
            theme.primaryColorThree,
            theme.secondaryColorOne,
          ]}
          style={styles.gradientContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hi, There</Text>
            <Text style={styles.text}>I am a Blue Haze Page</Text>
            <Text style={styles.textDesc}>
              I am a Dark Fantasy theme. I am primarily a light theme and come
              with a variety of color variants of black and white(Open my
              style.js to dig deeper! )
            </Text>
            <View style={styles.colorPaletteContainer}>
              <View
                style={[
                  styles.colorPaletteStyle,
                  styles.lightColorPaletteStyle,
                ]}
              >
                <Text style={colorPaletteTextStyle(theme.primaryColorOne)}>
                  {theme.primaryColorOne}
                </Text>
              </View>
              <View
                style={[
                  styles.colorPaletteStyle,
                  styles.lightColorPaletteStyle,
                ]}
              >
                <Text style={colorPaletteTextStyle(theme.primaryColorTwo)}>
                  {theme.primaryColorTwo}
                </Text>
              </View>
              <View
                style={[
                  styles.colorPaletteStyle,
                  styles.lightColorPaletteStyle,
                ]}
              >
                <Text style={colorPaletteTextStyle(theme.primaryColorThree)}>
                  {theme.primaryColorThree}
                </Text>
              </View>
              <View
                style={[
                  styles.colorPaletteStyle,
                  styles.darkColorPaletteStyle,
                ]}
              >
                <Text style={colorPaletteTextStyle(theme.secondaryColorOne)}>
                  {theme.secondaryColorOne}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
);

export default EBH;
