import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import CartItems from '../Components/CartItems';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DecreamentQuantity,
  RemoveFromCart,
  incearse,
} from '../Redux/CartSlice';
import { GlobalStyles } from '../../Common/Utils';

const Shop = ({ navigation }) => {
  const mycart = useSelector(state => state.cart.cart);
  console.log(mycart);
  const dispatch = useDispatch();

  const renderItems = ({ item }) => (
    <CartItems
      onadd={() => onincrese(item)}
      ondecre={() => ondecrese(item)}
      number={item.qty}
      price={item.price}
      title={item.name == undefined ? 'name' : item.name}
      image={item.image}
      iconname={item.qty === 0 ? 'delete-circle-outline' : 'minus'}
    />
  );

  const total = mycart
    .map(item => item.price * item.qty)
    .reduce((total, curnt) => {
      return total + curnt;
    }, 0);
  console.log(total, 'totl');

  const badge = mycart.length;
  console.log(typeof badge, badge, 'bdge');

  const onbackpress = () => {
    navigation.goBack();
  };
  const onincrese = item => {
    dispatch(incearse(item));
  };
  // const ondecrese = item => {
  //   dispatch(DecreamentQuantity(item));
  // };

  const ondecrese = item => {
    if (item.qty > 1) {
      dispatch(DecreamentQuantity(item));
    } else {
      dispatch(RemoveFromCart(item));
    }
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarBadge: badge,
    });
  }, [navigation, badge]);

  return (
    <SafeAreaView>
      <ScrollView style={{ marginBottom: 70 }}>
        <Header title={'cart'} onbackpress={onbackpress} />
        <View style={styles.textcont}>
          <Text style={styles.text}>My Cart</Text>
          <Text style={styles.text}>Total {total}</Text>
        </View>
        <View>
          <FlatList
            data={mycart}
            renderItem={item => renderItems(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: GlobalStyles.fonts.primary600,
    color: '#000',
  },
  textcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingTop: 10,
  },
});
