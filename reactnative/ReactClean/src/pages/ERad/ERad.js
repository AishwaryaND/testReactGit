
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './ERadStyle';

const ERad: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <View style={styles.waveContainerOne} />
        <View style={styles.waveContainerTwo} />
        <View style={styles.waveContainerThree} />
        <View style={styles.waveContainerFour} />
        <View style={styles.waveContainerFive} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hi, There</Text>
          <Text style={styles.text}>I am a Radiance Empty Page</Text>
          <Text style={styles.textDesc}>
            (Open my style.js to dig deeper! )
          </Text>
        </View>
      </View>
  </>
);

export default ERad;
