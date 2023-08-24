import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/Styles';

const CxButton = ({onbtnpress, children, style}) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onbtnpress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CxButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.black500,
  },
  flat: {
    backgroundColor: 'transparant',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
