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
import { SvgCss } from 'react-native-svg';
import styles from './EBBStyle';
import {theme} from './EBBStyle';

const colorPaletteTextStyle = function (bgColor) {
  return {
    fontSize: 15,
    fontWeight: 'bold',
    color: bgColor,
    textAlign: 'center',
  };
};


const blobCenter = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
<g transform="translate(300,300)">
  <path d="M147.4,-150.4C193.4,-101.4,234.7,-50.7,237,2.4C239.4,55.4,202.8,110.8,156.8,151.4C110.8,192.1,55.4,218.1,-3.1,221.1C-61.5,224.2,-123,204.4,-156.5,163.7C-190,123,-195.5,61.5,-194.1,1.4C-192.7,-58.7,-184.4,-117.4,-150.9,-166.4C-117.4,-215.4,-58.7,-254.7,-4,-250.7C50.7,-246.7,101.4,-199.4,147.4,-150.4Z" fill="#99A3CF"/>
</g>
</svg>
`;

const blobCorner = `<svg
width="600"
height="600"
viewBox="0 0 600 600"
xmlns="http://www.w3.org/2000/svg"
>
<g transform="translate(300,300)">
  <path d="M180.9,-182.3C228.9,-132.9,258.5,-66.5,259.5,1.1C260.6,68.6,233.2,137.2,185.2,185.8C137.2,234.5,68.6,263.3,1.1,262.2C-66.5,261.1,-132.9,230.3,-180.9,181.6C-228.9,132.9,-258.5,66.5,-253.9,4.6C-249.3,-57.3,-210.6,-114.6,-162.6,-163.9C-114.6,-213.2,-57.3,-254.6,4.6,-259.2C66.5,-263.8,132.9,-231.6,180.9,-182.3Z" fill="#233ea1" />
</g>
</svg>
`;
const blobCornerRight = `<svg
width="600"
height="600"
viewBox="0 0 600 600"
xmlns="http://www.w3.org/2000/svg"
>
<g transform="translate(300,300)">
  <path d="M180.9,-182.3C228.9,-132.9,258.5,-66.5,259.5,1.1C260.6,68.6,233.2,137.2,185.2,185.8C137.2,234.5,68.6,263.3,1.1,262.2C-66.5,261.1,-132.9,230.3,-180.9,181.6C-228.9,132.9,-258.5,66.5,-253.9,4.6C-249.3,-57.3,-210.6,-114.6,-162.6,-163.9C-114.6,-213.2,-57.3,-254.6,4.6,-259.2C66.5,-263.8,132.9,-231.6,180.9,-182.3Z" fill="#e0f3ff" />
</g>
</svg>
`;

const blobSmall = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
<g transform="translate(300,300)">
  <path d="M180.9,-182.3C228.9,-132.9,258.5,-66.5,259.5,1.1C260.6,68.6,233.2,137.2,185.2,185.8C137.2,234.5,68.6,263.3,1.1,262.2C-66.5,261.1,-132.9,230.3,-180.9,181.6C-228.9,132.9,-258.5,66.5,-253.9,4.6C-249.3,-57.3,-210.6,-114.6,-162.6,-163.9C-114.6,-213.2,-57.3,-254.6,4.6,-259.2C66.5,-263.8,132.9,-231.6,180.9,-182.3Z" fill="#ffffff"/>
</g>
</svg>`;

const EBB: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <SvgCss
          xml={blobCenter}
          width="100%"
          height="100%"
          style={styles.shapeBlobOne}
        />
        <SvgCss
          xml={blobCorner}
          width="100%"
          height="100%"
          style={styles.shapeBlobCorner}
        />
        <SvgCss
          xml={blobCornerRight}
          width="100%"
          height="100%"
          style={styles.shapeBlobCornerTopRight}
        />
        <SvgCss
          xml={blobCorner}
          width="100%"
          height="100%"
          style={styles.shapeBlobCorner}
        />
        <SvgCss
          xml={blobSmall}
          width="100%"
          height="100%"
          style={styles.shapeSmallCircle}
        />
        <StatusBar backgroundColor={theme.primaryColorOne} />
        <View style={styles.textContainer}>
          <Text style={styles.textHead}>Hi, There</Text>
          <Text style={styles.textIntro}>I am a Blob Blue Page</Text>
          <Text style={styles.textDesc}>
            I am a Blob blue theme. I am primarily a light theme and come with a
            variety of color variants and shapes.(Open my style.js to dig
            deeper! )
          </Text>
          <View style={styles.colorPaletteContainer}>
            <View style={styles.colorPaletteStyle}>
              <Text style={colorPaletteTextStyle(theme.textColorOne)}>
                {theme.textColorOne}
              </Text>
            </View>
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
              <Text style={colorPaletteTextStyle(theme.secondaryColorOne)}>
                {theme.secondaryColorOne}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
);

export default EBB;
