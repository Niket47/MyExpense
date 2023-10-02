import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const data = [
  { id: 1, name: 'Item 1', category: 'Category A' },
  { id: 2, name: 'Item 2', category: 'Category B' },
  // Add more data items with different categories
];

const CatgoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredData = selectedCategory
    ? data.filter(item => item.category === selectedCategory)
    : data;

  // const setbyMonths = months => {
  //   return data.filter(item => {
  //     const datewise =
  //       moment(item.date).format('MMMM') == 'reset' ||
  //       moment(item.date).format('MMMM') == months;

  //     console.log(datewise, 'asassas');
  //     return datewise;
  //   });
  // };

  // const received = setbyMonths(sortbymonths);
  // console.log(received, 'received');

  return (
    <View>
      <Text>Filter by Category:</Text>
      <Button
        title="Category A"
        onPress={() => setSelectedCategory('Category A')}
      />
      <Button
        title="Category B"
        onPress={() => setSelectedCategory('Category B')}
      />
      <Button title="Clear Filter" onPress={() => setSelectedCategory(null)} />

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default CatgoryFilter;
