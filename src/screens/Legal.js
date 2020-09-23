import React, {useContext, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore';
import Carousel from '../components/Carousel';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const Legal = (props) => {
  const {navigation, route} = props;
  const {home, FlexContainer, gradientContainer} = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={home}
      style={gradientContainer.style}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <Carousel
        navigation={navigation}
        style="slides"
        itemsPerInterval={1}
        items={[
          {
            title: 'Intro',
            copy: 'lorem ipsum here',
          },
          {
            title: 'Privacy',
            copy: 'lorem ipsum here',
          },
          {
            title: 'Terms',
            copy: 'lorem ipsum here',
          }
        ]}
      />
    </LinearGradient>
  );
};

export default Legal;
