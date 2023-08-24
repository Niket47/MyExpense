import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/Styles';

const Input = ({label, style, TextInputConfig}) => {
  let inputstyles = [styles.input];

  if (TextInputConfig && TextInputConfig.multiline) {
    inputstyles.push(styles.inputmultiline);
  }

  return (
    <View style={[styles.inputcontainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputstyles} {...TextInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputcontainer: {
    marginHorizontal: 4,
    marginVertical: 7,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.black500,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.white500,
    padding: 10,
    borderRadius: 6,
    borderColor: '#ddd',
    borderWidth: 2,
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
  inputmultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
