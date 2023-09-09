import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../utils/Colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Location = ({ name }) => {
  return (
    <View style={styles.location}>
      <Icon name="location-arrow" size={25} color="#FFF" style={styles.icon} />
      <Pressable style={styles.loccont}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
      <Icon name="arrow-down" size={25} color="#FFF" style={styles.icon} />
    </View>
  );
};

export default Location;

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
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary200,
    paddingLeft: 10,
  },
  text: {
    fontFamily: GlobalStyles.fonts.primary,
    fontSize: 16,
    textTransform: 'capitalize',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#fff',
  },
});
