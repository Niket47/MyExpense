import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerNav');
      // checkLogin();
    }, 1000);
  }, []);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.navigate('DrawerNav');
  //     } else {
  //       navigation.navigate('Login');
  //     }
  //   });
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  const checkLogin = async () => {
    const userid = await AsyncStorage.getItem('USERID');
    if (userid != null) {
      navigation.navigate('DrawerNav');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash</Text>
      <ActivityIndicator size="large" animating={true} color="#7F3DFF" />
    </View>
  );
};

export default Splash;
