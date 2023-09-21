import React, { useEffect, useRef } from 'react';

import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { GlobalStyles } from '../../Common/Utils';
import AddTrans from '../Screens/AddTrans';
import Expense from '../Screens/Expense';
import Income from '../Screens/Income';
import Transfer from '../Screens/Transfer';
import { useNavigation } from '@react-navigation/native';

const AddButton = ({ opened, toggleOpened }) => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('Income')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              { backgroundColor: GlobalStyles.colors.primarygreen },
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require('../../Expense-App/Images/icons/income.png')}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              { backgroundColor: GlobalStyles.colors.primaryblue },
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -100],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require('../../Expense-App/Images/icons/exchange.png')}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Expense')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              { backgroundColor: GlobalStyles.colors.primaryred },
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require('../../Expense-App/Images/icons/expense.png')}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleOpened} style={styles.addButton}>
          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require('../../Expense-App/Images/icons/close-plus.png')}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },
  box: {
    position: 'relative',
    width: 60,
    height: 60,
    marginTop: -30,
  },
  addButton: {
    shadowColor: GlobalStyles.colors.dark,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addButtonIcon: {
    width: 30,
    height: 30,
    tintColor: GlobalStyles.colors.white,
  },
  item: {
    position: 'absolute',
    top: 5,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemIcon: {
    width: 32,
    height: 32,
    tintColor: GlobalStyles.colors.white,
  },
});

export default AddButton;
