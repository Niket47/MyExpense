import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import TransactionCard from '../Compooents/TransactionCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';
import HomeHader from '../Compooents/HomeHader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TranCard from '../Compooents/TranCard';
import {
  ActivityIndicator,
  Button,
  Chip,
  List,
  TextInput,
} from 'react-native-paper';
import CatFilterBox from '../Compooents/CatFilterBox';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector(state => state.app.expense);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();

  const allcat = ['All', 'Income', 'Expense', 'Transaction'];

  const filteredData =
    selectedCategory === 'All'
      ? data
      : data.filter(item => item.category == selectedCategory);

  console.log(data, 'data');
  console.log(filteredData, 'flllll');

  const onDelete = itemData => {
    console.log(itemData.item.id, 'object-pressd');
    dispatch(deleteExpense(itemData.item.id));
  };
  const onEditExpense = itemData => {
    navigation.navigate('Income', { expenseId: itemData.item.id });
  };

  // console.log(condt(items));

  const [text, setText] = useState('');

  const filteredbyName = data.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase()),
  );
  console.log(filteredbyName, 'filteredbyName');

  const filteredbyDate = data.filter(item => {
    const itemDate = new Date(item.date).toLocaleDateString(); // Format the date for comparison
    return itemDate.includes(text);
  });

  const opendrawer = () => {
    navigation.openDrawer();
  };
  const notification = () => {};

  const renderExpenseItem = itemData => {
    return (
      <TranCard
        amountcolor={
          itemData.item.category === 'Income' ? '#00A86B' : '#DE2402'
        }
        // iconname={itemData.item.category == 'Income' ? 'up' : 'down'}
        iconname={
          itemData.item.category == 'Income'
            ? 'up'
            : itemData.item.category == 'Expense'
            ? 'down'
            : itemData.item.category == 'Transaction'
            ? 'swap'
            : 'pausecircleo'
        }
        name={itemData.item.name}
        category={itemData.item.category}
        date={itemData.item.date}
        description={itemData.item.description}
        transaction={itemData.item.amount}
        onpress={() => onDelete(itemData)}
        onLongPress={() => onEditExpense(itemData)}
      />
    );
  };

  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View>
            <HomeHader
              onleftpress={notification}
              onrightpress={opendrawer}
              lefticonname="menufold"
              iconname="search1"
              title="nik"
            />
          </View>
          <View>
            <TextInput
              label="Search by any..."
              value={text}
              onChangeText={text => setText(text)}
            />
          </View>
          <View style={styles.btnview}>
            {allcat.map(item => (
              <Chip
                style={{
                  marginHorizontal: 2,
                }}
                key={item}
                onPress={() => setSelectedCategory(item)}>
                {item}
              </Chip>
            ))}
          </View>

          <View>
            <FlatList
              data={filteredData}
              scrollEnabled={false}
              renderItem={renderExpenseItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  btnview: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
});
