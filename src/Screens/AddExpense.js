import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import InputForm from '../Components/InputForm';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, updateExpense } from '../Redux/ExpenseSlice';

const AddExpense = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const expensesId = route.params?.expenseId;

  const isEditing = !!expensesId;

  const selectedvalues = useSelector(state => state.app.expense).find(
    expense => expense.id === expensesId,
  );

  console.log(selectedvalues, 'selectedvalues');

  console.log(isEditing, 'params');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'edit' : 'add',
    });
  }, [navigation, isEditing]);

  const onConfirm = expenseData => {
    if (isEditing) {
      dispatch(updateExpense({ ...expenseData, id: expensesId }));
      console.log(expenseData, 'all');
    } else {
      dispatch(addExpense(expenseData));
    }
    navigation.goBack();
  };
  const oncancelhandler = () => {
    navigation.goBack();
  };

  // const handleAddTask = () => {
  //   const newTask = {
  //     title,
  //     completed: false,
  //     startDate: selectedStartDate.toString(),
  //     endDate: selectedEndDate.toString(),
  //     status: value ? value : 'open',
  //     id: task ? task.id : Date.now(),
  //   };
  //   if (title) {
  //     task ? dispatch(editTask(newTask)) : dispatch(addTask(newTask));
  //     setTitle('');
  //     setSelectedEndDate('');
  //     setValue('');
  //     setSelectedEndDate('');
  //     navigation.navigate('TaskList');
  //   } else {
  //     showToast('error', 'Please fill the task');
  //   }
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 19 }}>
          {isEditing ? 'edit' : 'Add Expense'}
        </Text>
        <InputForm
          onCancel={oncancelhandler}
          onSubmit={onConfirm}
          defaultvalues={selectedvalues}
        />
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
