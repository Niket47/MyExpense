import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>Splash</Text> */}
      <Image
        style={styles.tinyLogo}
        source={require('../../img/wolf_icon.gif')}
      />
      {/* <ActivityIndicator size="large" animating={true} color="#7F3DFF" /> */}
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
