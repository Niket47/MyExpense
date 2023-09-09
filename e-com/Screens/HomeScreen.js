import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'react-native-axios';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { GlobalStyles } from '../utils/Colors';
import SearchBar from '../components/SearchBar';
import Location from '../components/Location';
import { SliderBox } from 'react-native-image-slider-box';
import { sliderImages } from '../utils/AllData';
import {
  Button,
  Divider,
  Modal,
  PaperProvider,
  Portal,
} from 'react-native-paper';
import Product from '../components/Product';
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

const DealsUrl =
  'https://dee3-2409-4080-be11-e302-3d69-f424-ffc2-374.ngrok-free.app/deals';
const offerUrl =
  'https://dee3-2409-4080-be11-e302-3d69-f424-ffc2-374.ngrok-free.app/offers';
const url =
  'https://dee3-2409-4080-be11-e302-3d69-f424-ffc2-374.ngrok-free.app/list';
const productsUrl = 'https://fakestoreapi.com/products';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [deals, setDeals] = useState([]);
  const [offers, setOffers] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('jewelery');
  // const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    // padding: 20,
    marginHorizontal: 10,
    width: '94%',
    height: 400,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const ddata = [
    { label: "men's clothing", value: "men's clothing" },
    { label: "women's clothing", value: "women's clothing" },
    { label: 'jewelery', value: 'jewelery' },
    { label: 'electronics', value: 'electronics' },
  ];

  useEffect(() => {
    callapi();
    fetchDeals();
    fetchOffers();
    fetchProducts();
  }, []);
  const callapi = async () => {
    try {
      const response = await fetch(url);
      const jason = await response.json();
      setData(jason);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDeals = async () => {
    try {
      const res = await fetch(DealsUrl);
      const tojson = await res.json();
      setDeals(tojson);
      console.log(deals);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOffers = async () => {
    try {
      const resp = await fetch(offerUrl);
      const tojson = await resp.json();
      setOffers(tojson);
      console.log(offers);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const resp = await fetch(productsUrl);
      const tojson = await resp.json();
      setProducts(tojson);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeText = () => {};

  const onpressdeals = item => {};

  const selectlocation = () => {
    setVisible(!visible);
  };

  const mycart = useSelector(state => state.cart.cart);
  console.log(mycart, 'mycart');
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <SearchBar onChangeText={onChangeText} />
          <Location
            name={'deliever to nik - Surat'}
            onlocationpress={selectlocation}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => (
              <TouchableOpacity key={index} style={styles.slidercont}>
                <View>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.textbar}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <SliderBox
            images={sliderImages}
            // sliderBoxHeight={200}
            autoplay
            circleLoop
            ImageComponentStyle={{ width: '100%' }}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
          />
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              paddingTop: 8,
              textTransform: 'capitalize',
              fontFamily: GlobalStyles.fonts.primary,
            }}>
            trending delas of the week
          </Text>

          <View style={styles.offermain}>
            {deals.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.offercont}
                onPress={() => {
                  console.log('object');
                  navigation.navigate('ProductInfo', {
                    id: item.id,
                    title: item.title,
                    offer: item.offer,
                    oldPrice: item.oldPrice,
                    price: item.price,
                    carouselImages: item.carouselImages,
                    color: item.color,
                    size: item.size,
                    item: item,
                  });
                }}>
                <Image source={{ uri: item.image }} style={styles.offer} />
              </TouchableOpacity>
            ))}
          </View>
          <Divider bold="true" />
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              paddingTop: 8,
              textTransform: 'capitalize',
              fontFamily: GlobalStyles.fonts.primary,
            }}>
            today's delas
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('ProductInfo', {
                    id: item.id,
                    title: item.title,
                    offer: item.offer,
                    oldPrice: item.oldPrice,
                    price: item.price,
                    carouselImages: item.carouselImages,
                    color: item.color,
                    size: item.size,
                    item: item,
                  });
                }}>
                <Image
                  source={{ uri: item?.image }}
                  style={styles.offerimages}
                />
                <View
                  style={{
                    backgroundColor: '#e31837',
                    paddingVertical: 5,
                    // paddingHorizontal: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    width: 100,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: GlobalStyles.fonts.primary,
                    }}>
                    Upto {item.offer}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Divider bold="true" />

          <View>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={ddata}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              value={category}
              onChange={item => {
                setCategory(item.value);
              }}
              renderLeftIcon={() => (
                <Icon style={styles.icon} color="black" name="home" size={20} />
              )}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            {products
              .filter(item => item.category === category)
              .map((item, index) => (
                <Product item={item} key={index} />
              ))}
          </View>
        </ScrollView>
        {/* <View>
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Show
          </Button>
        </View> */}
      </SafeAreaView>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View style={{ marginBottom: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>
            Choose your Location
          </Text>

          <Text style={{ marginTop: 5, fontSize: 16, color: 'gray' }}>
            Select a delivery location to see product availabilty and delivery
            options
          </Text>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 10,
  },
  icon: {
    paddingLeft: 10,
  },
  Input: {
    width: '90%',
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  slidercont: {
    paddingTop: 5,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  textbar: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: GlobalStyles.fonts.primary,
  },
  offermain: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  offer: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
  },
  offercont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  offerimages: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  //
  dropdown: {
    margin: 10,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 10,
  },
});
