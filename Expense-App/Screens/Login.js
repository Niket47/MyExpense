import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CxHeader from '../Compooents/CxHeader';
import CxTextInput from '../Compooents/CxTextInput';
import PrimaryButton from '../Compooents/PrimaryButton';
import SecondaryButton from '../Compooents/SecondaryButton';

const Login = ({ navigation }) => {
  const imageleft = require('../../Expense-App/Images/icons/arrow-left.png');
  const imageright = require('../../Expense-App/Images/icons/arrow-left.png');
  const gotologin = () => {
    navigation.navigate('SignUp');
  };

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.maincont}>
      <CxHeader title={'Login'} imageleft={imageleft} imageright={imageright} />

      <View style={styles.subcont}>
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

        <PrimaryButton title={'Sign Up'} />
        <Text style={styles.textcenter}>or with</Text>
        <SecondaryButton title="Sign Up with Google" />
        <Text style={[styles.textcenter, styles.Login]} onPress={gotologin}>
          Don’t have an account yet? Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
