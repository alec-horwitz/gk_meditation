import 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/components/MainNavigator';
import {ThemeProvider} from './src/context/ThemeStore';

const App = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

export default App;
