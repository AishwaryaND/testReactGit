import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import EBlank from './pages/EBlank/EBlank';
import EBlSk from './pages/EBlSk/EBlSk';
import EEle from './pages/EEle/EEle';
import ERad from './pages/ERad/ERad';
import Jazz from './pages/Jazz/Jazz';
import EEBlue from './pages/EEBlue/EEBlue';
import EPremiumBlack from './pages/EPremiumBlack/EPremiumBlack';
import ESP from './pages/ESP/ESP';
import EOW from './pages/EOW/EOW';
import EBB from './pages/EBB/EBB';
import EOB from './pages/EOB/EOB';
import ENO from './pages/ENO/ENO';
import EDF from './pages/EDF/EDF';
import EBH from './pages/EBH/EBH';
import EPO from './pages/EPO/EPO';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="EmptyMaster">
      <Stack.Screen name="Home" component={ENO} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
