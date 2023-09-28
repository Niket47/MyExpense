import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import { FormateDates } from './Dates';

const TranCard = ({
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
      onPress={onpress}
      onLongPress={onLongPress}
      style={styles.mainview}>
      <View style={styles.imageview}>
        {/* <Image
          source={require('../Images/icons/icons8-circle.png')}
          style={styles.image}
        /> */}
        <AntDesign
          name={iconname}
          size={40}
          // color="#fff"
          color={iconname == 'up' ? '#DE2402' : '#00A86B'}
          style={styles.image}
        />
      </View>
      <View style={styles.nameview}>
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.des} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <View style={styles.amountview}>
        <Text
          style={{
            fontSize: responsiveFontSize(2), // 2.3% of total screen size
            color: amountcolor,
          }}
          numberOfLines={1}>
          {transaction}.00
        </Text>
        <Text style={styles.des} numberOfLines={1}>
          {FormateDates(date)}
          {/* {date} */}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TranCard;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    gap: 1,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2.7),
    marginHorizontal: responsiveWidth(1),
    marginVertical: responsiveHeight(0.7),
    borderRadius: responsiveWidth(5),
  },
  imageview: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(10), // % of window height
    width: responsiveWidth(10), // % of window width
    marginRight: responsiveWidth(1.5),
    backgroundColor: '#EEE5FF',
    borderRadius: responsiveWidth(5),
  },
  nameview: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: responsiveHeight(0.4),
    // paddingHorizontal: responsiveWidth(1),
    height: responsiveHeight(10), // % of window height
    width: responsiveWidth(10), // % of window width
    // backgroundColor: 'green',
  },
  amountview: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: responsiveHeight(0.4),
    paddingRight: responsiveWidth(2),
    height: responsiveHeight(10), // 10% of window height
    width: responsiveWidth(10), // 10% of window width
    // backgroundColor: 'blue',
  },
  image: {
    // resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderRadius: responsiveWidth(10),
    borderColor: '#a9a9a9',
    // height: responsiveHeight(10), // 10% of window height
    // width: responsiveWidth(10), // 10% of window width
  },
  title: {
    textTransform: 'capitalize',
    fontSize: responsiveFontSize(2.3), // 2.7% of total screen size
    color: '#000',
  },
  des: {
    fontSize: responsiveFontSize(1.8), // 2% of total screen size
  },
});
