import { View, Text } from 'react-native';
import React from 'react';
import Bottom from './Bottom';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Wallet from '../Screens/Wallet';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Bottom"
        component={Bottom}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
