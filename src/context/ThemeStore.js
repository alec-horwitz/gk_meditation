import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
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

  const Container = styled.View({
    flex: 1,
  });

  const FlexContainer = styled.View({
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const themes = {
    home: [
      gradientColors.bottomDeepBlue,
      gradientColors.bottomMidBlue,
      gradientColors.topLightPeach,
    ],
    themeTwo: [
      gradientColors.bottomMidBlue,
      gradientColors.bottomPastelBlue,
      gradientColors.topPastelPink,
    ],
    themeThree: {
      gradientTop: '#E79E84',
      gradientBottom: '#E5CB99',
    },
    Container,
    FlexContainer,
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
