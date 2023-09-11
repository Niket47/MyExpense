import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../Common/Utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-stock-star-rating';

const Catalog = ({
  image,
  category,
  name,
  price,
  //   onPressColor,
  onProductCatlog,
  rating,
}) => {
  const [active, setActive] = useState(false);
  const onPressColor = () => {
    setActive(!active);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onProductCatlog}>
      <Image source={{ uri: image }} style={styles.images} />
      <View style={styles.iconcont}>
        <Pressable onPress={onPressColor}>
          <View
            style={{
              backgroundColor: active ? '#DB3022' : 'white',
              width: 40,
              height: 40,
              borderRadius: 50,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Ionicons
              name="heart-outline"
              size={24}
              color={active ? '#fff' : '#000'}
            />
          </View>
        </Pressable>
      </View>
      <Text style={styles.category}>{category}</Text>
      <Rating stars={rating} maxStars={5} size={20} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.price}>{price} $</Text>
    </TouchableOpacity>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  container: {
    width: 164,
    height: 320,
    backgroundColor: GlobalStyles.colors.primarywhite,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  images: {
    width: 164,
    height: 215,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  category: {
    paddingLeft: 5,
    fontSize: 11,
    fontFamily: GlobalStyles.fonts.primary500,
    color: '#9B9B9B',
  },
  name: {
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: GlobalStyles.fonts.primary600,
    color: '#000',
  },
  price: {
    paddingLeft: 5,
    fontSize: 14,
    fontFamily: GlobalStyles.fonts.primary500,
    color: '#000',
  },
  iconcont: {
    position: 'absolute',
    right: 10,
    bottom: 60,
  },
});
