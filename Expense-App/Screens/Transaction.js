import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';
import HomeHader from '../Compooents/HomeHader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TranCard from '../Compooents/TranCard';

import TransactionHeader from '../Compooents/TransactionHeader';
import FilterFrom from '../Compooents/FilterFrom';
import BottMode from '../Compooents/BottMode';

const Transaction = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const data = useSelector(state => state.app.expense);
  console.log(data, 'data');
  const dispatch = useDispatch();

  const onDelete = itemData => {
    console.log(itemData.item.id, 'object-pressd');
    dispatch(deleteExpense(itemData.item.id));
  };

  const onEditExpense = itemData => {
    navigation.navigate('Income', { expenseId: itemData.item.id });
  };

  const renderExpenseItem = itemData => {
    return (
      <TranCard
        amountcolor={itemData.item.category == 1 ? '#00A86B' : '#DE2402'}
        iconname={itemData.item.category == 1 ? 'down' : 'up'}
        name={itemData.item.name}
        category={itemData.item.category}
        date={itemData.item.date}
        description={itemData.item.description}
        transaction={itemData.item.amount}
        onpress={() => onDelete(itemData)}
        onLongPress={() => onEditExpense(itemData)}
      />
    );
  };
  const select = () => {};
  const opendrawer = () => {};
  const notification = () => {};

  const [items, setItems] = useState(data);
  // const [selectedCategory, setSelectedCategory] = useState('All');

  const filterItemsByCategory = category => {
    if (category === 'All') {
      setItems(data); // Show all items when 'All' is selected
    } else {
      const filteredItems = data.filter(item => item.category == category);
      setItems(filteredItems);
    }
    // setSelectedCategory(category);
  };
  console.log(items, 'items');

  const selectdate = () => {};
  const filtercat = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TransactionHeader onfilter={filtercat} onselectdate={selectdate} />
        <BottMode
          Pressedincome={() => filterItemsByCategory(1)}
          PressedExpense={() => filterItemsByCategory(2)}
          Pressedreset={() => filterItemsByCategory('All')}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          onSwipeComplete={toggleModal}
          visible={isModalVisible}
        />
        <FlatList
          data={items}
          scrollEnabled={false}
          renderItem={renderExpenseItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  scrollView: {
    marginHorizontal: 5,
  },
});
