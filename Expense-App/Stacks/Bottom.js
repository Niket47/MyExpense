import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Home from '../Screens/Home';
import Transaction from '../Screens/Transaction';
import Budget from '../Screens/Budget';
import Profile from '../Screens/Profile';
import { GlobalStyles } from '../../Common/Utils';
import Income from '../Screens/Income';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddTrans from '../Screens/AddTrans';
import AddButton from '../Compooents/AddButton';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const navigation = useNavigation();
  const [opened, setOpened] = useState(false);

  const OpenMenu = () => {
    setOpened(!opened);
    // Alert.alert('image clicked');
  };
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 2,
          right: 5,
          left: 5,
          elevation: 2,
          borderRadius: 15,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                resizeMode="contain"
                source={require('../../Expense-App/Images/icons/home.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                resizeMode="contain"
                source={require('../../Expense-App/Images/icons/Transaction.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AddTrans"
        component={AddTrans}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={OpenMenu} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Income"
        component={Income}
        options={{
          headerShown: true,
          tabBarIcon: ({ size, color }) => {
            return (
              <View style={styles.plus}>
                <AntDesign name="plus" size={50} color={'#fff'} />
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                resizeMode="contain"
                source={require('../../Expense-App/Images/icons/pie-chart.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                resizeMode="contain"
                source={require('../../Expense-App/Images/icons/user.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  plus: {
    position: 'absolute',
    top: -25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7F3DFF',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
export default BottomNav;
