import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../img/banner.jpg')} />

      <View style={styles.card}>
        <Text style={styles.title}>SignUp</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 350,
  },
  card: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '95%',
    height: '60%',
    position: 'absolute',
    top: 170,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    alignSelf: 'center',
  },
});
