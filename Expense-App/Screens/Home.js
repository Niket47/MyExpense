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
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import TransactionCard from '../Compooents/TransactionCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../Redux/Slices';
import HomeHader from '../Compooents/HomeHader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TranCard from '../Compooents/TranCard';
import { ActivityIndicator, Button, Chip, List } from 'react-native-paper';
import CatFilterBox from '../Compooents/CatFilterBox';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector(state => state.app.expense);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();

  const allcat = ['All', 'Income', 'Expense', 'Transaction'];

  // const filteredData =
  //   selectedCategory === 'All'
  //     ? data
  //     : data.filter(item => item.category == selectedCategory);

  console.log(data, 'data');
  // console.log(filteredData, 'flllll');

  const onDelete = itemData => {
    console.log(itemData.item.id, 'object-pressd');
    dispatch(deleteExpense(itemData.item.id));
  };
  const onEditExpense = itemData => {
    navigation.navigate('Income', { expenseId: itemData.item.id });
  };

  const [searchtext, setSearchtext] = useState('');

  const opendrawer = () => {
    navigation.openDrawer();
  };
  const notification = () => {};

  // const filtersss = data.filter(item => {
  //   const name = item.name.toLowerCase().includes(searchtext.toLowerCase());
  //   const itemDate = new Date(item.date).toLocaleDateString();

  //   const dec = item.description
  //     .toLowerCase()
  //     .includes(searchtext.toLowerCase());
  //   return name || dec;
  // });

  // console.log(filtersss, 'filtersss');

  const filterData = (searchtext, category) => {
    return data.filter(item => {
      const name = item.name.toLowerCase().includes(searchtext.toLowerCase());
      const dec = item.description
        .toLowerCase()
        .includes(searchtext.toLowerCase());
      const categoryMatch =
        category === 'All' || item.category == selectedCategory;

      return (name || dec) && categoryMatch;
    });
  };

  const filteredDatass = filterData(searchtext, selectedCategory);
  console.log(filteredDatass, 'filterData');

  const renderExpenseItem = itemData => {
    return (
      <TranCard
        amountcolor={
          itemData.item.category === 'Income' ? '#00A86B' : '#DE2402'
        }
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
              onleftpress={opendrawer}
              onrightpress={notification}
              lefticonname="menufold"
              iconname="search1"
              title="nik"
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              label="Search by any..."
              value={searchtext}
              onChangeText={text => setSearchtext(text)}
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
              data={filteredDatass}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
