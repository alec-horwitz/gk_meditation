import 'react-native-gesture-handler';
import React, {useState} from 'react';
import ThemeSelect from './src/screens/ThemeSelect';
import BottomNav from './src/components/BottomNav';
import {ThemeProvider} from './src/context/ThemeStore';

const App = () => {
  const [showThemeSelect, handleThemeSelect] = useState(true);

  return (
    <ThemeProvider>
      {showThemeSelect ? (
        <ThemeSelect handleThemeSelect={handleThemeSelect} />
      ) : (
        <BottomNav />
      )}
    </ThemeProvider>
  );
};

export default App;
