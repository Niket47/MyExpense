import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import InputForm from '../Components/InputForm';
import {useSelector, useDispatch} from 'react-redux';
import {addExpense} from '../Redux/ExpenseSlice';

const AddExpense = ({route}) => {
  const dispatch = useDispatch();
  const expensesId = route.params?.expenseId;
  const isEdit = !!expensesId;
  console.log(expensesId, isEdit);

  const onConfirm = expenseData => {
    console.log(expenseData);
    dispatch(addExpense(expenseData));
  };
  const oncancelhandler = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 19}}>Add Expense</Text>
        <InputForm onCancel={oncancelhandler} onSubmit={onConfirm} />
      </View>
    </ScrollView>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 50,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
});
