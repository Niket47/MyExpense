import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bottom from './Bottom';
import Splash from './Splash';
import CatlogDetail from '../Screens/Detail/CatlogDetail';

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <StackNav.Screen
          name="Bottom"
          component={Bottom}
          options={{ headerShown: false }}
        />
        <StackNav.Screen
          name="CatlogDetail"
          component={CatlogDetail}
          options={{ headerShown: false }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
