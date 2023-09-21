import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ActivityIndicator, Modal } from 'react-native-paper';
import { GlobalStyles } from '../../Common/Utils';

const Loder = ({ visible }) => {
  return (
    <Modal visible={visible} style={styles.modalinner}>
      <View style={styles.modal}>
        <ActivityIndicator
          animating={visible}
          color={GlobalStyles.colors.primaryblue}
          size="large"
        />
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
