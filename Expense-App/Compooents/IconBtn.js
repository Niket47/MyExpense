import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const IconBtn = ({ icon, size, color, onpress }) => {
  return (
    <Pressable
      onPress={onpress}
      style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.btncontainer}>
        <Icon name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  btncontainer: {
    borderRadius: 16,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
