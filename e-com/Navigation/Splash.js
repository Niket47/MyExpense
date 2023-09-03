import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';


const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../images/wolf_icon.gif')}
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
