import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../context/ThemeStore';
import Carousel from '../components/Carousel';

const Parents = (props) => {
  const {navigation, route} = props;
  const {home, gradientContainer} = useContext(ThemeContext);
  const gradientStyle = gradientContainer.style
  return (
    <LinearGradient
      colors={home}
      style={gradientStyle}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <Carousel
        navigation={navigation}
        style="slides"
        itemsPerInterval={1}
        items={[
          {
            title: 'Who we are',
            copy: 'lorem ipsum here',
          },
          {
            title: 'What we are doing',
            copy: 'lorem ipsum here',
          },
          {
            title: 'Why we are doing it',
            copy: 'lorem ipsum here',
          },
          {
            title: 'Get in touch',
            copy: 'lorem ipsum here',
          },
        ]}
      />
    </LinearGradient>
  );
};

export default Parents;
