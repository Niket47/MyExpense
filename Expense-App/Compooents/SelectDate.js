import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const SelectDate = ({ Visible, handleConfirm, hideDatePicker }) => {
  return (
    <View>
      <DateTimePickerModal
        isVisible={Visible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default SelectDate;

const styles = StyleSheet.create({});
