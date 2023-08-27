import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import Main from './VendorApp/Main';

const App = () => {
  return <Main />;
};

export default App;
