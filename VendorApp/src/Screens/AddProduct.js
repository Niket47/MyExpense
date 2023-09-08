import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, { useState } from 'react';
import CxTextInput from '../Components/CxTextInput';
import CxButton from '../Components/CxButton';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';
import Loder from '../Components/Loder';

const AddProduct = () => {
  const [visible, setVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [product, setProduct] = useState('');

  const [productdes, setProductdes] = useState('');

  const [price, setPrice] = useState('');

  const [pricedes, setPricedes] = useState('');

  const [imagedata, setImagedata] = useState({ assets: [{ uri: '' }] });

  const onimagepicker = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        opengallary();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const opengallary = async () => {
    // setVisible(true);
    const res = await launchImageLibrary({ mediaType: 'photo' });
    if (!res.didCancel) {
      setImagedata(res);
    }
  };
  const onsaveproduct = async () => {
    // setVisible(true);
    const name = await AsyncStorage.getItem('name');
    const uesrid = await AsyncStorage.getItem('uuId');

    const productId = uuid.v4();
    const reference = storage().ref(imagedata.assets[0].fileName);

    const pathToFile = imagedata.assets[0].uri;
    // uploads file
    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(imagedata.assets[0].fileName)
      .getDownloadURL();
    console.log(url);

    firestore()
      .collection('Products')
      .doc(productId)
      .set({
        productId: productId,
        userid: uesrid,
        addedby: name,
        product: product,
        pricedes: productdes,
        price: price,
        pricedes: productdes,
        isEnabled: isEnabled,
        imageName: url,
      })
      .then(res => {
        setVisible(false);
        console.log(res);
      })
      .catch(error => {
        setVisible(false);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerview}>
        {imagedata.assets[0].uri === '' ? (
          <TouchableOpacity onPress={onimagepicker}>
            <Image
              source={require('../../img/product.png')}
              style={styles.camara}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onimagepicker} style={styles.banner}>
            <Image
              source={{ uri: imagedata.assets[0].uri }}
              style={styles.banner}
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <CxTextInput
          placeholder="product name"
          onChangeText={text => {
            setProduct(text);
          }}
          value={product}
        />
        <CxTextInput
          placeholder="product des"
          onChangeText={text => {
            setProductdes(text);
          }}
          value={productdes}
        />
        <CxTextInput
          placeholder="price"
          type={'number-pad'}
          onChangeText={text => {
            setPrice(text);
          }}
          value={price}
        />
        <CxTextInput
          placeholder="price descount"
          type={'number-pad'}
          onChangeText={text => {
            setPricedes(text);
          }}
          value={pricedes}
        />
        <View style={styles.switch}>
          <Text>in Stock</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <CxButton onPress={onsaveproduct} title="submit" />
        <Loder visible={visible} />
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerview: {
    width: '90%',
    height: 200,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camara: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  banner: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
});
