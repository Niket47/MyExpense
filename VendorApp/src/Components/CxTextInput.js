import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CxTextInput = ({placeholder, value, onChangeText, type}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
        value={value}
        onChangeText={text => {
          onChangeText(text);
        }}
      />
    </View>
  );
};

export default CxTextInput;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
