import { View, Text, Keyboard, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import CxTextInput from './CxTextInput';
import PrimaryButton from './PrimaryButton';
import { Dropdown } from 'react-native-element-dropdown';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DatePicker from 'react-native-date-picker';

const InputForm = ({ onSubmit, defaultvalues }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  console.log(date, 'date');

  const data = [
    { label: 'Income 1', value: '1' },
    { label: 'Expense 2', value: '2' },
    { label: 'Transaction 3', value: '3' },
  ];

  const [inputvalues, setInputvalues] = useState({
    name: defaultvalues ? defaultvalues.name : '',
    amount: defaultvalues ? defaultvalues.amount : '',
    category: defaultvalues ? defaultvalues.category : '',
    description: defaultvalues ? defaultvalues.description : '',
    // date: defaultvalues ? defaultvalues.date : date,
    // date: date,
    // id: Math.random(),
  });

  const inputchangehandler = (fieldName, entertext) => {
    setInputvalues({
      ...inputvalues,
      [fieldName]: entertext,
      //   id: Math.random(),
    });
  };

  const onSubmithandler = () => {
    const expenseData = {
      name: inputvalues.name,
      description: inputvalues.description,
      amount: inputvalues.amount,
      category: inputvalues.category,
      // date: inputvalues.date,
      //   id: inputvalues.id,
    };
    // console.log(expenseData);
    onSubmit(expenseData);
    setInputvalues('');
  };

  return (
    <View>
      <CxTextInput
        placeholder={'Name'}
        value={inputvalues.name}
        onChangeText={text => inputchangehandler('name', text)}
      />
      {/* <Text style={{ color: 'red' }}>{errors.inputvalues.name}</Text> */}
      <CxTextInput
        type={'number-pad'}
        placeholder={'Amount'}
        value={inputvalues.amount}
        onChangeText={text => inputchangehandler('amount', text)}
      />
      {/* <Text style={{ color: 'red' }}>{errors.inputvalues.amount}</Text> */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={inputvalues.category}
        onChange={text => inputchangehandler('category', text.value)}
      />
      <Button title="Open" onPress={() => setOpen(true)} />
      {/* <DatePicker
        modal
        open={open}
        date={date}
        format="DD-MM-YYYY"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}

      <CxTextInput
        placeholder={'Description'}
        value={inputvalues.description}
        onChangeText={text => inputchangehandler('description', text)}
      />

      <View style={styles.buttons}>
        <PrimaryButton title={'submit'} onPress={onSubmithandler} />
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
  buttons: {},
  dropdown: {
    height: verticalScale(53),
    paddingVertical: verticalScale(8),
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: '#91919F',
    backgroundColor: '#F1F1FA',
    borderWidth: 1,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    alignItems: 'center',
    color: '#91919F',
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
