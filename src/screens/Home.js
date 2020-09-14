import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import AnimationRenderer from '../components/AnimationRenderer';
import animationData from '../assets/testMorph.json';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const customStyles = {
  width: '100%',
  height: '100%',
};

const Home = (props) => {
  const { navigation } = props
  return (
    <Container>
      <Text>I am Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Meditate')}>
        <Text >Go to Meditate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Focus')}>
        <Text >Go to Focus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('More')}>
        <Text >Go to More</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;


  /* <AnimationRenderer
        animationData={animationData}
        autoPlay={true}
        resizeMode="cover"
        customStyles={customStyles}></AnimationRenderer> */

 /* <TouchableOpacity
        onPress={() => navigation.navigate('Meditate')}>
        <Text>Go to Meditate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Focus')}>
        <Text>Go to Focus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('More')}>
        <Text>Go to More</Text>
      </TouchableOpacity> */

  /* </Container> */

