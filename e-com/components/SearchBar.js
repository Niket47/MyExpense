import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../utils/Colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.search}>
      <Pressable style={styles.subcont}>
        <Icon name="search" size={25} color="#000" style={styles.icon} />
        <TextInput style={styles.Input} onChangeText={onChangeText} />
      </Pressable>
      <Icon name="search" size={25} color="#000" style={styles.icon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 10,
  },
  icon: {
    paddingLeft: 10,
  },
  Input: {
    width: '90%',
  },
  subcont: {
    backgroundColor: '#fFF',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 10,
    width: '90%',
    marginHorizontal: 10,
  },
});
