import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import InputForm from '../Components/InputForm';
import {useSelector, useDispatch} from 'react-redux';
import {addExpense, updateExpense} from '../Redux/ExpenseSlice';
import {useNavigation} from '@react-navigation/native';

const AddExpense = ({route, navigation}) => {
  const selectedvalues = useSelector(state => state.app.expense);
  const dispatch = useDispatch();

  const expensesId = route.params?.expenseId;
  const isEditing = !!expensesId;
  console.log(expensesId, isEditing, 'params');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'edit' : 'add',
    });
  }, [navigation, expensesId]);

  const onConfirm = expenseData => {
    // console.log(expenseData);
    // dispatch(addExpense(expenseData));
    // navigation.goBack();
    if (isEditing) {
      dispatch(updateExpense({...expenseData, id: expensesId}));
    } else {
      dispatch(addExpense(expenseData));
    }
    navigation.goBack();
  };
  const oncancelhandler = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 19}}>
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
