import { View, Text, Keyboard, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CxTextInput from './CxTextInput';
import PrimaryButton from './PrimaryButton';
import { Dropdown } from 'react-native-element-dropdown';

const InputForm = ({ onSubmit, defaultvalues }) => {
  const [selected, setSelected] = useState('');
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  console.log(selected, 'selected');

  const [inputvalues, setInputvalues] = useState({
    amount: defaultvalues ? defaultvalues.amount : '',
    category: defaultvalues ? defaultvalues.category : '',
    description: defaultvalues ? defaultvalues.description : '',
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
      description: inputvalues.description,
      amount: inputvalues.amount,
      category: inputvalues.category,
      //   id: inputvalues.id,
    };
    // console.log(expenseData);
    onSubmit(expenseData);
    setInputvalues('');
  };

  return (
    <View>
      <CxTextInput
        type={'number-pad'}
        placeholder={'Amount'}
        value={inputvalues.amount}
        onChangeText={text => inputchangehandler('amount', text)}
      />
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
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
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
