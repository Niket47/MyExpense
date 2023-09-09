import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../utils/Colors';
import { AddtoCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';

const Product = ({ item }) => {
  const [addedtocart, setAddedtocart] = useState(false);
  const dispatch = useDispatch();
  const addtoCartitems = item => {
    setAddedtocart(true);
    dispatch(AddtoCart(item));
  };
  return (
    <TouchableOpacity style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 150, height: 150, resizeMode: 'contain' }}
      />
      <Text
        numberOfLines={1}
        style={{ width: 150, marginTop: 10, fontSize: 14 }}>
        {item.title}
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#ffc72c',
            fontSize: 15,
            fontWeight: GlobalStyles.fonts.bold100,
          }}>
          Rs.{item.price}
        </Text>
        <Text
          style={{
            color: '#151514',
            fontSize: 15,
            fontWeight: GlobalStyles.fonts.bold100,
          }}>
          {item.rating.rate}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => addtoCartitems(item)}
        style={{
          backgroundColor: '#ffc72c',
          padding: 10,
          borderRadius: 20,
          marginHorizontal: 10,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            textTransform: 'capitalize',
            fontSize: 14,
            fontWeight: GlobalStyles.fonts.bold100,
            color: '#000',
          }}>
          {addedtocart ? 'added to cart' : 'add to cart'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Product;
