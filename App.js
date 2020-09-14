import 'react-native-gesture-handler';
import React, {useState} from 'react';
import BottomNav from './src/components/BottomNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  return (
        <BottomNav />
  )
};

export default App;
