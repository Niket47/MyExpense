import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../Common/Utils';

const CxHeader = ({ title, imageleft, imageright }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.image} resizeMode="contain" source={imageleft} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity>
        <Image style={styles.image} resizeMode="contain" source={imageright} />
      </TouchableOpacity>
    </View>
  );
};

export default CxHeader;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 64,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 32,
    width: 32,
  },
  text: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontFamily: GlobalStyles.fonts.primary500,
    color: '#000',
  },
});
