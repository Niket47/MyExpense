import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import TransactionCard from '../Compooents/TransactionCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';

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
    return (
      <TransactionCard
        title={itemData.item.amount}
        time={'10am'}
        description={itemData.item.description}
        transaction={itemData.item.amount}
        onpress={() => onDelete(itemData)}
        onLongPress={() => onEditExpense(itemData)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <TransactionCard
            title={'name'}
            time={'10am'}
            description={'hello'}
            transaction={'100'}
          />
          <FlatList
            data={data}
            renderItem={renderExpenseItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 5,
  },
});
