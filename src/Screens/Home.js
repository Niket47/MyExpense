import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Slice from '../Components/Slice';
import {useSelector, useDispatch} from 'react-redux';
import {deleteExpense} from '../Redux/ExpenseSlice';
const data = [
  {
    id: '1',
    name: 'shoes',
    amount: 59.99,
    date: '2021-12-19',
  },
  {
    id: '2',
    name: 'trousers',
    amount: 89.29,
    date: '2022-01-05',
  },
];

const Home = () => {
  const alldata = useSelector(state => state.app.expense);

  const dispatch = useDispatch();

  const onpresshandler = ({item}) => {
    console.log(item.id);
    dispatch(deleteExpense(item.id));
  };

  const renderExpenseItem = ({item}) => {
    return (
      <Slice
        name={item.name}
        amount={item.amount}
        date={item.date}
        onSlicepress={onpresshandler({item})}
      />
    );
  };
  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={alldata}
        keyExtractor={item => item.id}
        renderItem={renderExpenseItem}
      />
    </View>
  );
};

export default Home;
