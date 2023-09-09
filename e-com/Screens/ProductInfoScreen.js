import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart } from '../redux/CartSlice';

const ProductInfoScreen = ({ route, navigation }) => {
  const { width } = Dimensions.get('window');

  const height = (width * 100) / 100;
  const data = route.params;
  const dispatch = useDispatch();

  console.log(data.item, 'items');

  const [addedtocart, setAddedtocart] = useState(false);

  const additemtocart = item => {
    setAddedtocart(true);
    dispatch(AddtoCart(item));
  };

  const mycart = useSelector(state => state.cart.cart);
  console.log(mycart, 'mycart');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 45, backgroundColor: '#fff', flex: 1 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.carouselImages.map((item, index) => (
          <ImageBackground
            key={index}
            style={{ width, height, resizeMode: 'contain', marginTop: 25 }}
            source={{ uri: item }}>
            <View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'red',
                  borderRadius: 25,
                }}>
                <Text
                  style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>
                  20% off
                </Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>
          {route?.params?.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 6 }}>
          ₹{route?.params?.price}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text>Color: </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {route?.params?.color}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text>Size: </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: '#D0D0D0', borderWidth: 1 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 5 }}>
          Total : ₹{route.params.price}
        </Text>
        <Text style={{ color: '#00CED1' }}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
            gap: 5,
          }}>
          <Icon name="home" size={24} color="black" />

          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            Deliver To Sujan - Bangalore 560019
          </Text>
        </View>
      </View>

      <Text style={{ color: 'green', marginHorizontal: 10, fontWeight: '500' }}>
        IN Stock
      </Text>
      <TouchableOpacity
        onPress={() => additemtocart(data.item)}
        style={{
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        {addedtocart ? <Text>Added to Cart</Text> : <Text>Add to Cart</Text>}
        {/* <Text>Add to Cart</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFAC1C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
