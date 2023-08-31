import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, []);

  const checkLogin = async () => {
    const userid = await AsyncStorage.getItem('uuId');
    if (userid != null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('LogIn');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={styles.tinyLogo}
        source={require('../../img/wolf_icon.gif')}
      />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
