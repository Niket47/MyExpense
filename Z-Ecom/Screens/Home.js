import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../Common/Utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { productsa, productsb, productsc } from '../../Common/dummyProduct';
import Catalog from '../Components/Catalog';
import Header from '../Components/Header';

const Home = ({ navigation }) => {
  const [catalog, setCatlog] = useState(productsa);
  const [perfume, setPerfume] = useState(productsb);
  const [groceries, setGroceries] = useState(productsc);

  const onPressCatlog = item => {
    navigation.navigate('CatlogDetail', {
      id: item.id,
      category: item.category,
      image: item.thumbnail,
      price: item.price,
      name: item.title,
      images: item.images,
      category: item.price,
      item: item,
    });
    console.log(item);
  };

  const RenderItems = ({ item }) => (
    <Catalog
      image={item.thumbnail}
      category={item.category}
      price={item.price}
      name={item.title}
      rating={item.rating}
      onProductCatlog={() => onPressCatlog(item)}
    />
  );

  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginBottom: 5 }}>
            <Image
              source={require('../LocalData/images/banner.png')}
              style={styles.banner}
            />
          </View>
          <Text style={styles.cattitle}>smartphones</Text>
          <FlatList
            horizontal
            data={catalog}
            renderItem={item => RenderItems(item)}
            keyExtractor={item => item.id}
          />
          <View style={styles.containers}>
            <Text style={styles.cattitle}>perfume & skincare</Text>
            <FlatList
              horizontal
              data={perfume}
              renderItem={item => RenderItems(item)}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.containers}>
            <Text style={styles.cattitle}>groceries</Text>
            <FlatList
              horizontal
              data={groceries}
              renderItem={item => RenderItems(item)}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  containers: {
    marginVertical: 7,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cattitle: {
    fontSize: 20,
    fontFamily: GlobalStyles.fonts.primary500,
    color: '#000',
    textTransform: 'capitalize',
    paddingVertical: 5,
    marginLeft: 7,
  },
});
