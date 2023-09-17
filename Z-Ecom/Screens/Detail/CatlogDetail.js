import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import Header from '../../Components/Header';
import { GlobalStyles } from '../../../Common/Utils';
import CartBtn from '../../Components/CartBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../Redux/CartSlice';

const CatlogDetail = ({ route, navigation }) => {
  // const cartdata = useSelector();
  const dispatch = useDispatch();
  const { width } = Dimensions.get('window');

  const height = (width * 200) / 380;
  const data = route.params;
  const AllData = route.params;
  console.log(data, 'data');
  console.log(AllData, 'item');

  const onbackpress = () => {
    navigation.goBack();
  };

  const addproduct = AllData => {
    dispatch(addtoCart(AllData));
  };

  return (
    <>
      <Header title={AllData.item.brand} onbackpress={onbackpress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}>
          {data.images.map((item, index) => (
            <ImageBackground
              key={index}
              source={{ uri: item }}
              resizeMode="contain"
              style={{ height, width }}></ImageBackground>
          ))}
        </ScrollView>
        <View style={styles.pricecont}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: GlobalStyles.fonts.primary600,
              color: '#000',
            }}>
            {data.item.title}
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: GlobalStyles.fonts.primary600,
              color: '#000',
            }}>
            ${data.item.price}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: GlobalStyles.fonts.primary600,
              // color: '#000',
            }}>
            {data.item.category}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: GlobalStyles.fonts.primary600,
              color: '#000',
            }}>
            discountPercentage {data.item.discountPercentage}%
          </Text>
          <Text
            style={{
              fontSize: 21,
              fontFamily: GlobalStyles.fonts.primary200,
              color: '#000',
            }}>
            {data.item.description}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <CartBtn
            btntitle="add to cart"
            onaddbtnpress={() => addproduct(AllData)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default CatlogDetail;

const styles = StyleSheet.create({
  pricecont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 15,
  },
});
