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

import styles from './ENOStyle';
import {theme} from './ENOStyle';

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    fontWeight: 'bold',
    color: bgColor,
    textAlign: 'center',
  };
};

const ENO: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <StatusBar hidden />
        <View style={styles.textContainer}>
          <Text style={styles.textHead}>Good Morning.</Text>
          <Text style={styles.textIntro}>I am a Nocturne Orange Page</Text>
          <Text style={styles.textDesc}>
            (Open my style.js to dig deeper! ) I am Dark color based theme and i
            work very well with amoled and qled screens. I have a great color
            combo of black and orange variants. Do you wish to try me ?
          </Text>
          <View style={styles.colorPaletteContainer}>
            <View style={styles.colorPaletteStyle}>
              <Text style={colorPaletteTextStyle(theme.primaryColorOne)}>
                {theme.primaryColorOne}
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
            <View style={styles.colorPaletteStyle}>
              <Text style={colorPaletteTextStyle(theme.secondaryColorOne)}>
                {theme.secondaryColorOne}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
);

export default ENO;
