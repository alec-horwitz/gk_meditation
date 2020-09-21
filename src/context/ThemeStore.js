import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,    
  Button,
  Text,
  TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {

  const gradientColors = {
    bottomDeepBlue: '#2d24bd',
    bottomMidBlue: '#3963c7',
    topLightPeach: '#ff8960',
    bottomTeal: '#22c1c3',
    topGold: '#fdbb2d',
    bottomBlue: '#3f5efb',
    topMagenta: '#fc466b',
    bottomPastelBlue: '#94bbe9',
    topPastelPink: '#eeaeca',
  };

  const themes = {
    Home:
      [ gradientColors.bottomDeepBlue,
        gradientColors.bottomMidBlue,
        gradientColors.topLightPeach ],
    themeTwo: [ gradientColors.bottomMidBlue,
      gradientColors.bottomPastelBlue,
      gradientColors.topPastelPink ],
    themeThree: {
      gradientTop: '#E79E84',
      gradientBottom: '#E5CB99',
    },
  };

  const [theme, setTheme] = useState(themes['Home']);

  const switchTheme = (theme) => {
    console.log('them from switchtheme ', theme)
    if (theme in themes) {
      setTheme(themes[theme]);
    } else {
      console.log('unknown theme');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
