import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import Stacks from './Stacks/Stacks';

const Navigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Stacks />
    </>
  );
};

export default Navigator;
