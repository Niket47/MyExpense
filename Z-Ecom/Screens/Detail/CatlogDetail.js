import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';

const CatlogDetail = ({ route, navigation }) => {
  const { width } = Dimensions.get('window');

  const height = (width * 100) / 100;
  const data = route.params;
  const AllData = route.params;
  console.log(data, 'data');
  console.log(AllData, 'item');
  return (
    <>
      <Header title="Catlog Detail" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>{data.item.price}</Text>
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
      </ScrollView>
    </>
  );
};

export default CatlogDetail;

const styles = StyleSheet.create({});
