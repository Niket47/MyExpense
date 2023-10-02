import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';
import TranCard from '../Compooents/TranCard';
import TransactionHeader from '../Compooents/TransactionHeader';
import BottMode from '../Compooents/BottMode';
import DatePicker from 'react-native-date-picker';
import { Chip } from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';

const Transaction = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const data = useSelector(state => state.app.expense);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const dispatch = useDispatch();

  const allcat = ['All', 'Income', 'Expense', 'Transaction'];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [sortbymonths, setSortbymonths] = useState('reset');

  const filterdatas = (months, catg) => {
    return data.filter(item => {
      const bycategory = catg == 'All' || item.category == catg;
      // const datewise =
      //   item.date == null || moment(item.date).format('MMMM') == months;
      const daee =
        sortbymonths == 'reset'
          ? item
          : moment(item.date).format('MMMM') == months;
      return bycategory && daee;
    });
  };

  const receivedss = filterdatas(sortbymonths, selectedCategory);
  console.log(receivedss, 'receivedss');

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

  const selectdate = () => {
    setDatemodal(true);
  };

  const [datemodal, setDatemodal] = useState(false);

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

        <Modal
          animationType="slide"
          transparent={true}
          visible={datemodal}
          onRequestClose={() => {
            setModalVisible(!datemodal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 17,
                  color: '#000',
                  borderBottomColor: '#c2c2c2',
                  borderBottomWidth: 1,
                }}>
                Select month
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                  paddingHorizontal: 5,
                }}>
                <Chip onPress={() => setSortbymonths('reset')}>Reset</Chip>
                <TouchableOpacity onPress={() => setDatemodal(!datemodal)}>
                  <Icon name="close" size={26} color="#000" />
                </TouchableOpacity>
              </View>

              <ScrollView horizontal>
                {months.map(item => (
                  <Chip
                    style={{
                      marginHorizontal: 2,
                    }}
                    key={item}
                    onPress={() => setSortbymonths(item)}>
                    {item}
                  </Chip>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>

        <FlatList
          data={receivedss}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',

    backgroundColor: 'white',
    borderRadius: 20,

    paddingVertical: 20,
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
