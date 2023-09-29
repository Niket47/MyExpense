import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeHader = ({
  onleftpress,
  onrightpress,
  lefticonname,
  iconname,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={onleftpress}>
          <AntDesign name={lefticonname} size={27} color="#000" />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onrightpress}>
        <AntDesign name={iconname} size={27} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
  },
  centerbtn: {
    backgroundColor: '#c2c2c2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  text: {
    paddingLeft: 30,
    fontSize: 17,
    color: '#000',
  },
});
