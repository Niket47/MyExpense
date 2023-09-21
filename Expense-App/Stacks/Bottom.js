import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Home from '../Screens/Home';
import Transaction from '../Screens/Transaction';
import AddTrans from '../Screens/AddTrans';
import Budget from '../Screens/Budget';
import Profile from '../Screens/Profile';
import AddButton from '../Compooents/AddButton';
import { GlobalStyles } from '../../Common/Utils';

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
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 2,
          borderRadius: 15,
        },
      }}>
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
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },
  box: {
    position: 'relative',
    width: 60,
    height: 60,
    marginTop: -30,
  },
  addButton: {
    shadowColor: GlobalStyles.colors.dark,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addButtonIcon: {
    width: 40,
    height: 40,
    tintColor: GlobalStyles.colors.white,
  },
  item: {
    position: 'absolute',
    top: 5,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemIcon: {
    width: 32,
    height: 32,
    tintColor: GlobalStyles.colors.white,
  },
});
export default BottomNav;
