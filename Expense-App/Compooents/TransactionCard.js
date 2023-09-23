import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FormateDate, FormateDates } from './Dates';

const width = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const TransactionCard = ({
  name,
  category,
  description,
  transaction,
  date,
  onpress,
  onLongPress,
  iconname,
  amountcolor,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onpress}
      onLongPress={onLongPress}>
      <View
        style={{ backgroundColor: '#1f1e1e', padding: 10, borderRadius: 10 }}>
        <AntDesign
          name={iconname}
          size={40}
          // color="#fff"
          color={iconname == 'up' ? '#DE2402' : '#00A86B'}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          paddingLeft: 10,
        }}>
        <View>
          {/* <Text style={{ paddingBottom: 10, fontSize: 16, color: '#292B2D' }}>
            {category}
          </Text> */}
          <Text>
            {name}
            {/* {category} */}
          </Text>
          <Text>{description}</Text>
        </View>
        <View>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 17,
              // color: '#00A86B',
              color: amountcolor,
              alignSelf: 'flex-end',
            }}>
            {transaction}.00
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 14,
              color: '#91919F',
              alignSelf: 'flex-end',
            }}>
            {/* {date} */}
            {/* {FormateDate(date)} */}
            {FormateDates(date)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 90,
    backgroundColor: '#FCFCFC',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 17,
    marginVertical: 10,
  },
  image: {
    // padding: 10,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#7d7d7d4b',
  },
  description: {
    paddingBottom: 10,
    fontSize: 14,
    color: '#91919F',
    textTransform: 'capitalize',
  },
  name: {
    paddingBottom: 10,
    fontSize: 16,
    color: '#292B2D',
    textTransform: 'capitalize',
  },
});
