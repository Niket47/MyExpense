import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const TranCard = () => {
  return (
    <View style={styles.mainview}>
      <View style={styles.imageview}>
        <Image
          source={require('../Images/icons/icons8-circle.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.nameview}>
        <Text style={styles.title} numberOfLines={1}>
          Shopping
        </Text>
        <Text style={styles.des} numberOfLines={1}>
          Buy an Avocado Buy an Avocado...
        </Text>
      </View>
      <View style={styles.amountview}>
        <Text style={styles.title} numberOfLines={1}>
          + Rp 3.129.00
        </Text>
        <Text style={styles.des} numberOfLines={1}>
          20-7-23
        </Text>
      </View>
    </View>
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
    paddingHorizontal: responsiveWidth(2),
    marginHorizontal: responsiveWidth(1),
    borderRadius: responsiveWidth(5),
  },
  imageview: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(10), // % of window height
    width: responsiveWidth(10), // % of window width
    marginRight: responsiveWidth(1.5),
    backgroundColor: 'red',
    borderRadius: responsiveWidth(5),
  },
  nameview: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(0.4),
    // paddingHorizontal: responsiveWidth(1),
    height: responsiveHeight(10), // % of window height
    width: responsiveWidth(10), // % of window width
    // backgroundColor: 'green',
  },
  amountview: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: responsiveHeight(0.4),
    paddingRight: responsiveWidth(2),
    height: responsiveHeight(10), // 10% of window height
    width: responsiveWidth(10), // 10% of window width
    // backgroundColor: 'blue',
  },
  image: {
    resizeMode: 'contain',
    height: responsiveHeight(10), // 10% of window height
    width: responsiveWidth(10), // 10% of window width
  },
  title: {
    fontSize: responsiveFontSize(2.7), // 2.7% of total screen size
    color: '#000',
  },
  des: {
    fontSize: responsiveFontSize(2), // 2% of total screen size
  },
});
