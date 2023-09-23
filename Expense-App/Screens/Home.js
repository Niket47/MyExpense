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
} from 'react-native';
import React from 'react';
import TransactionCard from '../Compooents/TransactionCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';
import HomeHader from '../Compooents/HomeHader';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({ navigation }) => {
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
    console.log(itemData.item.date, 'item,date');
    return (
      <TransactionCard
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
  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View>
            <HomeHader
              lefticonname={'menu-unfold'}
              leftcolor="#000"
              leftsize={20}
              iconname={'search1'}
              color="#000"
              size={20}
              select={'selectmonth'}
              onselect={select}
              onleftpress={opendrawer}
              onrightpress={notification}
            />
          </View>
          <View>
            <TransactionCard
              name={'name'}
              time={'10am'}
              description={'hello'}
              transaction={'100'}
            />
            <FlatList
              data={data}
              scrollEnabled={false}
              renderItem={renderExpenseItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  scrollView: {
    marginHorizontal: 5,
  },
});
