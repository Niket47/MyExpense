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
