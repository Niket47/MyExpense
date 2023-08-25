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
  {
    id: '3',
    name: 'trousers',
    amount: 89.29,
    date: '2022-01-05',
  },
];

const Home = () => {
  const alldata = useSelector(state => state.app.expense);

  const dispatch = useDispatch();

  const deletehandler = id => {
    console.log(id, 'deletehandler');
    dispatch(deleteExpense(id));
  };

  const renderExpenseItem = ({item}) => {
    return (
      <Slice
        name={item.name}
        amount={item.amount}
        date={item.date}
        id={item.id}
        onPressDelete={deletehandler}
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
