import { View, Text } from 'react-native';
import React from 'react';
import Navigator from './Expense-App/Navigator';
import { Provider } from 'react-redux';
import { store } from './Expense-App/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';

let persiststore = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
