import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CxHeader from '../Compooents/CxHeader';
import CxTextInput from '../Compooents/CxTextInput';
import PrimaryButton from '../Compooents/PrimaryButton';
import SecondaryButton from '../Compooents/SecondaryButton';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import { ActivityIndicator } from 'react-native-paper';
import { GlobalStyles } from '../../Common/Utils';
import Loder from '../Compooents/Loder';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const imageleft = require('../../Expense-App/Images/icons/arrow-left.png');
  const imageright = require('../../Expense-App/Images/icons/arrow-left.png');
  const gotologin = () => {
    navigation.navigate('Login');
  };

  const [visible, setVisible] = useState(false);

  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onRegisterUser = () => {
    setVisible(true);
    const userid = uuid.v4();
    firestore()
      .collection('Users')
      .doc(userid)
      .set({
        name: names,
        email: email,
        pass: pass,
        uuId: userid,
      })
      .then(() => {
        setVisible(false);
        console.log('User added!');
      })
      .catch(error => {
        setVisible(false);
        console.log(error);
      });
  };

  return (
    <View style={styles.maincont}>
      <CxHeader
        title={'SignUp'}
        imageleft={imageleft}
        imageright={imageright}
      />

      <View style={styles.subcont}>
        <CxTextInput
          placeholder={'Name'}
          onChangeText={text => setNames(text)}
          value={names}
        />
        <CxTextInput
          placeholder={'Email'}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <CxTextInput
          placeholder={'Pass'}
          onChangeText={text => setPass(text)}
          value={pass}
        />

        <PrimaryButton title={'Sign Up'} onPress={onRegisterUser} />
        <Text style={styles.textcenter}>or with</Text>
        <SecondaryButton title="Sign Up with Google" />
        <Text style={[styles.textcenter, styles.Login]} onPress={gotologin}>
          Already have an account? Login
        </Text>
      </View>
      <Loder visible={visible} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  maincont: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textcenter: {
    textAlign: 'center',
  },
  headertitle: {
    fontSize: 18,
  },
  Login: {
    color: '#7F3DFF',
    fontSize: 14,
    marginVertical: 5,
  },
  subcont: {
    marginTop: 30,
  },
});
