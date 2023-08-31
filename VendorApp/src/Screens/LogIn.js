import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CxTextInput from '../Components/CxTextInput';
import CxButton from '../Components/CxButton';
import {GlobalStyles} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import firestore, {firebase} from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = () => {
  const [email, setEmail] = useState('');

  const [pass, setPass] = useState('');

  const navigation = useNavigation();

  const loginhandler = () => {
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs != []) {
          if (querySnapshot.docs[0].data().pass == pass) {
            gotonextscreen(querySnapshot.docs[0].data());
          }
        }
      });
  };

  const gotonextscreen = async data => {
    await AsyncStorage.setItem('name', data.name);
    await AsyncStorage.setItem('email', data.email);
    await AsyncStorage.setItem('mobile', data.name);
    // await AsyncStorage.setItem('pass', data.pass);
    await AsyncStorage.setItem('uuId', data.uuId);
    navigation.navigate('Home');
  };

  const goToscreen = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../img/banner.jpg')} />
      <View style={styles.card}>
        <Text style={styles.title}>LogIn</Text>
        <CxTextInput
          placeholder="Email"
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
        />
        <CxTextInput
          placeholder="Pass"
          onChangeText={text => {
            setPass(text);
          }}
          value={pass}
        />
        <CxButton title="LogIn" onPress={loginhandler} />
        <View style={styles.acc}>
          <Text>dont have acc</Text>
          <Text
            onPress={goToscreen}
            style={{
              marginLeft: 10,
              color: GlobalStyles.colors.primary200,
              fontSize: 16,
            }}>
            Create acc
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 350,
  },
  card: {
    paddingHorizontal: 10,
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
  acc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
