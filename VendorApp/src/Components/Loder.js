import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

const Loder = ({visible}) => {
  return (
    <View>
      <ActivityIndicator animating={visible} color="#c2c2c2" size="large" />
    </View>
  );
};

export default Loder;
