import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import Stack from './Nav/Stack';

const ZecmMain = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#e3e3e3"
        translucent={true}
      />
      <Stack />
    </>
  );
};

export default ZecmMain;
