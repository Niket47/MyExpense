import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Slice from '../Components/Slice';
import {useSelector, useDispatch} from 'react-redux';
import {deleteExpense} from '../Redux/ExpenseSlice';

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
