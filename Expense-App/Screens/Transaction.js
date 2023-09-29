import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';
import TranCard from '../Compooents/TranCard';
import TransactionHeader from '../Compooents/TransactionHeader';
import BottMode from '../Compooents/BottMode';
import DatePicker from 'react-native-date-picker';
import { Chip } from 'react-native-paper';

const Transaction = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const data = useSelector(state => state.app.expense);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const dispatch = useDispatch();

  const allcat = ['All', 'Income', 'Expense', 'Transaction'];

  const filteredData =
    selectedCategory === 'All'
      ? data
      : data.filter(item => item.category == selectedCategory);

  console.log(data, 'data');
  console.log(filteredData, 'flllll');

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
        amountcolor={
          itemData.item.category === 'Income' ? '#00A86B' : '#DE2402'
        }
        // iconname={itemData.item.category == 'Income' ? 'up' : 'down'}
        iconname={
          itemData.item.category == 'Income'
            ? 'up'
            : itemData.item.category == 'Expense'
            ? 'down'
            : itemData.item.category == 'Transaction'
            ? 'swap'
            : 'pausecircleo'
        }
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

  const filtercat = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const selectdate = () => {
    setOpen(true);
  };

  //  use Dropdown select for this by months here !!!

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TransactionHeader onfilter={filtercat} onselectdate={selectdate} />
        <BottMode
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          onSwipeComplete={toggleModal}
          visible={isModalVisible}>
          <Text>Click Me</Text>
          <View style={styles.btnview}>
            {allcat.map(item => (
              <Chip
                style={{
                  marginHorizontal: 2,
                }}
                key={item}
                onPress={() => setSelectedCategory(item)}>
                {item}
              </Chip>
            ))}
          </View>
        </BottMode>

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          // format="DD-MM-YYYY"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <FlatList
          data={filteredData}
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
  btnview: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
