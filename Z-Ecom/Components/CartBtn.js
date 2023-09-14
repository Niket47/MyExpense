import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../Common/Utils';

const CartBtn = ({ onaddbtnpress, btntitle }) => {
  return (
    <TouchableOpacity onPress={onaddbtnpress} style={styles.btncont}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: GlobalStyles.fonts.primary500,
          color: '#fff',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
        {btntitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CartBtn;
const styles = StyleSheet.create({
  btncont: {
    backgroundColor: GlobalStyles.colors.primaryred,
    paddingVertical: 18,
    borderRadius: 35,
    marginHorizontal: 20,
  },
});
