import {View, Text} from 'react-native';
import React from 'react';
import Chart from '../Screens/Chart';
import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Bottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
