import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeHader = ({
  select,
  onselect,
  onleftpress,
  onrightpress,
  lefticonname,
  leftcolor,
  leftsize,
  iconname,
  color,
  size,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onleftpress}>
        <AntDesign name={lefticonname} size={leftsize} color={leftcolor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerbtn} onPress={onselect}>
        <Text style={{ fontSize: 16, textTransform: 'capitalize' }}>
          {select}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onrightpress}>
        <AntDesign name={iconname} size={size} color={color} />
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
});
