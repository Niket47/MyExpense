import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Bottom');
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../../e-com/images/wolf_icon.gif')}
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
