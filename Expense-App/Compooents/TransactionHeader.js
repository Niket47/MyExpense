import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const TransactionHeader = ({ onselectdate, onfilter }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveHeight(8.5),
        backgroundColor: '#F1F1FA',
        paddingHorizontal: responsiveWidth(1.5),
      }}>
      <View>
        <Button mode="outlined" onPress={onselectdate}>
          Month
        </Button>
      </View>
      <TouchableOpacity
        onPress={onfilter}
        style={{ backgroundColor: '#f6f6f6df', borderRadius: 10, padding: 3 }}>
        <Ionicons name="filter" size={38} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default TransactionHeader;

const styles = StyleSheet.create({});
