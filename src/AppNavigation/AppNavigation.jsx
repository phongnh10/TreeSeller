import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
};

export default AppNavigation;
