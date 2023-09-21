import { StyleSheet, TextInput, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../Common/Utils';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const CxTextInput = ({ onChangeText, type, placeholder, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CxTextInput;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(53),
    paddingVertical: verticalScale(8),
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: '#91919F',
    backgroundColor: '#F1F1FA',
    borderWidth: 1,
    margin: 10,
  },
  input: {
    alignItems: 'center',
    // gap: 10,
    // height: 40,
    // margin: 12,
    fontSize: 16,
  },
});
