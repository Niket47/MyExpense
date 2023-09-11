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
import { productsa } from '../../Common/dummyProduct';
import Catalog from '../Components/Catalog';
import Header from '../Components/Header';

const Home = ({ navigation }) => {
  const [catalog, setCatlog] = useState(productsa);

  const onPressCatlog = item => {
    navigation.navigate('CatlogDetail', {
      id: item.id,
      category: item.category,
      image: item.thumbnail,
      price: item.price,
      name: item.name,
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
          <FlatList
            horizontal
            data={catalog}
            renderItem={item => RenderItems(item)}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
