import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: '#008E97' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icons name="home" size={24} color="#008E97" />
            ) : (
              <Icons name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: { color: '#008E97' },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#008E97" />
            ) : (
              <Ionicons name="person" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: { color: '#008E97' },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="shopping-cart" size={24} color="#008E97" />
            ) : (
              <Icon name="shopping-cart" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
