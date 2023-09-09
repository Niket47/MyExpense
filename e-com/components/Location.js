import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { GlobalStyles } from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Location = ({ name, onlocationpress }) => {
  return (
    <TouchableOpacity style={styles.location} onPress={onlocationpress}>
      <Ionicons
        name="location-outline"
        size={25}
        color="#FFF"
        style={styles.icon}
      />
      <View style={styles.loccont}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <Ionicons
        name="arrow-down-sharp"
        size={25}
        color="#FFF"
        style={styles.icon}
      />
    </TouchableOpacity>
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
