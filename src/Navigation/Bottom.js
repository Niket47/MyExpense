import {View, Text} from 'react-native';
import React from 'react';
import Chart from '../Screens/Chart';
import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from '../constants/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddExpense from '../Screens/AddExpense';
import IconBtn from '../Components/IconBtn';

const Tab = createBottomTabNavigator();
const Bottom = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
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
        headerRight: ({tintColor}) => (
          <IconBtn
            icon="plus"
            color={tintColor}
            size={24}
            onpress={() => {
              navigation.navigate('AddExpense');
            }}
          />
        ),
      })}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
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
            return (
              <IconBtn
                icon="plus"
                color={color}
                size={size}
                onpress={() => {
                  navigation.navigate('AddExpense');
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
