import { View, Text } from 'react-native';
import React from 'react';
import Navigator from './Expense-App/Navigator';
import { Provider } from 'react-redux';
import { store } from './Expense-App/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
