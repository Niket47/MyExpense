import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import InputForm from '../Compooents/InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, updateExpense } from '../Redux/Slices';

const Income = ({ navigation, route }) => {
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

  const onConfirm = data => {
    if (isEditing) {
      dispatch(updateExpense({ ...data, id: expensesId }));
      console.log(data, 'all');
    } else {
      dispatch(addExpense(data));
    }
    navigation.goBack();
  };

  // const oncofirm = data => {
  //   console.log(data);
  //   dispatch(addExpense(data));
  // };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 15 }}>How much?</Text>
            <Text style={{ fontSize: 35 }}>$</Text>
          </View>
          <View>
            <InputForm onSubmit={onConfirm} defaultvalues={selectedvalues} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Income;

const styles = StyleSheet.create({});
