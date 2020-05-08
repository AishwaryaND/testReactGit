
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './EBlSkStyle';

const EBlSk: () => React$Node = () => (
    <>
      <View style={styles.parent}>
        <View style={styles.skewContainer} />
        {/* <View style={styles.skewContainerTwo} /> */}
        <View>
          <Text style={styles.text}>Hi, There</Text>
          <Text style={styles.text}>I am a Blue Skew Empty Page</Text>
          <Text style={styles.textDesc}>
          (Open my style.js to dig deeper! )
          </Text>
        </View>
      </View>
  </>
);

export default EBlSk;
