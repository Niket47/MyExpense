import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';

const Slice = ({id, name, amount, onSlicepress}) => {
  const navigation = useNavigation();
  const onLongPress = () => {
    navigation.navigate('AddExpense', {expenseId: id});
  };

  return (
    <TouchableOpacity onPress={onSlicepress} onLongPress={onLongPress}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.forwith}>1</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Slice;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.black500,
    marginVertical: 5,
  },
  forwith: {
    width: 30,
    fontSize: 15,
    color: GlobalStyles.colors.white500,
  },

  text: {
    fontSize: 15,
    color: GlobalStyles.colors.white500,
  },
  amount: {
    fontSize: 15,
    color: '#14FF03',
  },
});
