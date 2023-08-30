import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../utils/Colors';

const CxButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CxButton;
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.primary200,
  },
});
