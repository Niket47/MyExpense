import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { GlobalStyles } from '../../Common/Utils';

const CartItems = ({
  title,
  onadd,
  ondecre,
  number,
  price,
  image,
  iconname,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.subview}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginEnd: 10,
          }}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.title}>${price}</Text>
        </View>
        <View style={styles.addcon}>
          <TouchableOpacity style={styles.btn} onPress={ondecre}>
            <MaterialIcon name={iconname} size={34} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>{number}+</Text>
          <TouchableOpacity style={styles.btn} onPress={onadd}>
            <MaterialIcon name="plus" size={34} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 7,
  },
  subview: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 5,
    flex: 1,
  },
  addcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontFamily: GlobalStyles.fonts.primary500,
    color: '#000',
  },
  btn: {
    marginHorizontal: 5,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
