import { View, Text } from 'react-native';
import React from 'react';
import ZecmMain from './Z-Ecom/ZecmMain';
import { Provider } from 'react-redux';
import { store } from './Z-Ecom/Redux/MyStore';

const App = () => {
  return (
    <Provider store={store}>
      <ZecmMain />
    </Provider>
  );
};

export default App;
