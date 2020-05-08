

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
import { Svg, Defs, Path, LinearGradient, Stop } from 'react-native-svg';
import styles from './EOWStyle';
import {theme} from './EOWStyle';

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    color: bgColor,
    fontWeight: 'bold',
    textAlign: 'center',
  };
};

const EOW: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <StatusBar backgroundColor={theme.primaryColorOne} />
        <Svg
          style={styles.topShape}
          height={Dimensions.get('window').height}
          width="100%"
        >
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop
                offset="0"
                stopColor={theme.primaryColorOne}
                stopOpacity="1"
              />
              <Stop
                offset="1"
                stopColor={theme.primaryColorTwo}
                stopOpacity="1"
              />
            </LinearGradient>
          </Defs>
          <Path
            d="M-10.15,152.45 C149.99,150.00 271.49,-49.98 500.00,151.47 L500.00,0.00 L0.00,0.00 Z"
            fill="url(#grad)"
          />
        </Svg>
        <View style={styles.textContainer}>
          <Text style={styles.textHead}>Hi, There</Text>
          <Text style={styles.textIntro}>I am an Orange Wave Page</Text>
          <Text style={styles.textDesc}>
            I am an Orange wave theme. I am primarily a light theme and come
            with a variety of color variants of orange and white.(Open my
            style.js to dig deeper! )
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
              <Text style={colorPaletteTextStyle(theme.secondaryColorOne)}>
                {theme.secondaryColorOne}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
);

export default EOW;
