import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../Common/Utils';

const PrimaryButton = ({ title,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    marginHorizontal: 10,
    paddingHorizontal: 16,
    marginVertical: 7,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: GlobalStyles.fonts.primary500,
  },
});
