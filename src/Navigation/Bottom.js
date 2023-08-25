import {View, Text} from 'react-native';
import React from 'react';
import Chart from '../Screens/Chart';
import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from '../constants/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddExpense from '../Screens/AddExpense';

const Tab = createBottomTabNavigator();
const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary200},
        headerTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarActiveTintColor: GlobalStyles.colors.white500,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 2,
          borderRadius: 15,
          backgroundColor: GlobalStyles.colors.black500,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({size, color}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          headerShown: false,

          tabBarIcon: ({size, color}) => {
            return <Icon name="pie-chart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,

          tabBarIcon: ({size, color}) => {
            return <Icon name="area-chart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          headerShown: true,
          presentation: 'modal',
          tabBarIcon: ({size, color}) => {
            return <Icon name="plus-square-o" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
