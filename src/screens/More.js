import React, {useContext, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore';

const More = (props) => {
  const {navigation} = props;
  const {navigate} = navigation;
  const buttons = [
    {'label': 'Parents', 'navigate': navigate},
    {'label': 'HowTo', 'navigate': navigate},
    {'label': 'Suggestion Box', 'navigate': Linking},
    {'label': 'Legal', 'navigate': navigate},
    {'label': 'Home', 'navigate': navigate}
  ]
  const { 
    home, 
    FlexContainer, 
    gradientContainer, 
    makeLongButtons, 
    LongButton, 
    LongButtonContainer 
  } = useContext(ThemeContext);
  const gradientStyle = gradientContainer.style

  return (
    <LinearGradient
      colors={home}
      style={gradientStyle}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <FlexContainer>
        <LongButtonContainer>
          {makeLongButtons(buttons)}
        </LongButtonContainer>
      </FlexContainer>
    </LinearGradient>
  );
};

export default More;
