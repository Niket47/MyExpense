import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ActivityIndicator, Modal} from 'react-native-paper';

const Loder = ({visible}) => {
  return (
    <Modal visible={visible} style={styles.modalinner}>
      <View style={styles.modal}>
        <ActivityIndicator animating={visible} color="#1bb810" size="large" />
      </View>
    </Modal>
  );
};

export default Loder;
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  modalinner: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
