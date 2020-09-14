import 'react-native-gesture-handler';
import React, {useState} from 'react';
import BottomNav from './src/components/BottomNav';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  )
};

export default App;
