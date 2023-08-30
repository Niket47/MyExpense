import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CxTextInput from '../Components/CxTextInput';
import CxButton from '../Components/CxButton';
import {useNavigation} from '@react-navigation/native';
import Loder from '../Components/Loder';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const registeruser = () => {
    if (validate()) {
      console.log('submit');
      setVisible(true);
    } else {
      Alert.alert('enterdata');
    }
  };
  const validate = () => {
    let valid = true;
    if (name == '') {
      valid = false;
    }
    if (Email == '') {
      valid = false;
    }
    if (Number == '') {
      valid = false;
    }
    if (Pass == '') {
      valid = false;
    }
    if (Confirm == '') {
      valid = false;
    }
    if (Pass !== Confirm) {
      valid = false;
    }
  };
  const navigation = useNavigation();
  const onbackbtnhandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../img/banner.jpg')} />
      <TouchableOpacity style={styles.backbtn} onPress={onbackbtnhandler}>
        <Image style={styles.btn} source={require('../../img/back.png')} />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>SignUp</Text>
        <CxTextInput
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <CxTextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <CxTextInput
          placeholder="Number"
          keyboardType="number-pad"
          onChangeText={text => setNumber(text)}
          value={number}
        />
        <CxTextInput
          placeholder="Pass"
          onChangeText={text => setPass(text)}
          value={pass}
        />
        <CxTextInput
          placeholder="Confirm Pass"
          onChangeText={text => setConfirm(text)}
          value={confirm}
        />
        <CxButton title="singup" onPress={registeruser} />
      </View>
      <Loder visible={false} />
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
  btn: {
    height: 40,
    width: 40,
  },
  backbtn: {
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
