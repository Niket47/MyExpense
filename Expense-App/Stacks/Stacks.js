import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './DrawerNav';
import Splash from './Splash';
import Expense from '../Screens/Expense';
import Transfer from '../Screens/Transfer';
import Income from '../Screens/Income';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Expense"
          component={Expense}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Income"
          component={Income}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
