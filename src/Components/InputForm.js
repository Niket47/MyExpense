import {View, Text, Keyboard, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from './Input';
import {GlobalStyles} from '../constants/Styles';
import CxButton from './CxButton';

const InputForm = ({onSubmit, onCancel}) => {
  const [inputvalues, setInputvalues] = useState({
    name: '',
    amount: '',
    date: '',
    id: Math.random(),
  });

  const inputchangehandler = (fieldName, entertext) => {
    setInputvalues({
      ...inputvalues,
      [fieldName]: entertext,
      id: Math.random(),
    });
  };

  const onSubmithandler = () => {
    const expenseData = {
      name: inputvalues.name,
      amount: +inputvalues.amount,
      date: inputvalues.date,
      id: inputvalues.id,
    };
    console.log(expenseData);
    onSubmit(expenseData);
    setInputvalues('');
  };

  return (
    <View>
      <Input
        label="Name"
        TextInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: entertext => inputchangehandler('name', entertext),
          value: inputvalues.name,
        }}
      />
      <Input
        label="Amount"
        TextInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: entertext => inputchangehandler('amount', entertext),
          value: inputvalues.amount,
        }}
      />
      <Input
        label="Date"
        TextInputConfig={{
          maxLength: 10,
          placeholder: 'yyyy-mm-dd',
          onChangeText: entertext => inputchangehandler('date', entertext),
          value: inputvalues.date,
        }}
      />

      <View style={styles.buttons}>
        <CxButton style={styles.CxButton} mode="flat" onbtnpress={onCancel}>
          Cancel
        </CxButton>
        <CxButton style={styles.CxButton} onbtnpress={onSubmithandler}>
          submit
        </CxButton>
      </View>
    </View>
  );
};

export default InputForm;
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  CxButton: {
    minWidth: 150,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
