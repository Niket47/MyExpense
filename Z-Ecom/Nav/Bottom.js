import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Shop from '../Screens/Shop';
import Fav from '../Screens/Fav';

import Profile from '../Screens/Profile';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          //   bottom: -5,
          //   right: 3,
          //   left: 3,
          elevation: 2,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="home" size={24} color="#DB3022" />
            ) : (
              <MaterialIcons name="home-outline" size={24} color="#000" />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
         
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="cart" size={24} color="#DB3022" />
            ) : (
              <Ionicons name="cart-outline" size={24} color="#000" />
            ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcon name="favorite" size={24} color="#DB3022" />
            ) : (
              <MaterialIcon name="favorite-outline" size={24} color="#000" />
            ),
        }}
      />
      {/* <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="bag" size={24} color="#DB3022" />
            ) : (
              <Ionicons name="bag-outline" size={24} color="#000" />
            ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="user" size={24} color="#DB3022" />
            ) : (
              <FontAwesome name="user-o" size={24} color="#000" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
