import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CatFilterBox = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
      <Text>CatFilterBox</Text>
    </View>
  );
};

export default CatFilterBox;

const styles = StyleSheet.create({});
