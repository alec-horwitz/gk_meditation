import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import styled from 'styled-components/native';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
// We should probably organize this better into a datastructure like: 
// { Components: {
//   {containers: [], buttons: [ ]},
// },
//      Styles: []}
// }
// if we are going to use this as a toolbox it will probably increase efficiency and clarity as the codebase grows 

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

  const gradientContainer = StyleSheet.create({
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
  });

  const LongButtonContainer = styled.View({
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'space-evenly',
  })

  const LongButton = styled.TouchableOpacity({
      margin: 15,
      padding: 20,
      width: 300,
      borderRadius: 55,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: '#15114D',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.6,
      shadowRadius: 12.35,
      elevation: 19,
  })

  const LongButtonText = styled.Text({
      fontFamily: 'System',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#3963c7'
  })

  const Container = styled.View({
    flex: 1,
  });

  const FlexContainer = styled.View({
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
  const makeLongButtons = (buttons) => {
    const suggestionMail = 'mailto:frank@thefrankharvey.com?subject=Suggestion&body=Description';
    const buttonMap = buttons.map(button => {
      const label = button['label'];
      const navigate = () => (label === "Suggestion Box") ? button['navigate'].openURL(suggestionMail) : button['navigate'](label);
      return <LongButton onPress={navigate}><LongButtonText>{label}</LongButtonText></LongButton>
    })
    return buttonMap
  }

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
    gradientContainer,
    LongButtonContainer,
    LongButton,
    makeLongButtons
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
