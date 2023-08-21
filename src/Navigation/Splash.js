import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DrawerNav');
    }, 1000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash</Text>
      <ActivityIndicator size="large" animating={true} color="#7F3DFF" />
    </View>
  );
};

export default Splash;
