import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Products from '../tabs/Products';
import Orders from '../tabs/Orders';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [selected, setselected] = useState(0);
  return (
    <View style={styles.container}>
      {selected == 0 ? <Products /> : <Orders />}
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            setselected(0);
          }}>
          <Image
            source={require('../../img/product.png')}
            style={[
              styles.icon,
              {tintColor: selected == 0 ? '#c2c2c2' : '#000'},
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddProduct');
          }}>
          <Image source={require('../../img/add.png')} style={styles.addicon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setselected(1);
          }}>
          <Image
            source={require('../../img/cart.png')}
            style={[
              styles.icon,
              {tintColor: selected == 1 ? '#c2c2c2' : '#000'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 5,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  addicon: {
    width: 60,
    height: 60,
  },
});
