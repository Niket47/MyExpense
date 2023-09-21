import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../Common/Utils';

const SecondaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.secondry,
    paddingVertical: 15,
    marginHorizontal: 10,
    paddingHorizontal: 16,
    marginVertical: 7,
  },
  title: {
    fontSize: 16,
    color: '#7F3DFF',
    textTransform: 'capitalize',
    fontFamily: GlobalStyles.fonts.primary500,
  },
});
