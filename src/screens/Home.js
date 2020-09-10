import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import AnimationRenderer from '../components/AnimationRenderer';
import animationData from '../assets/testMorph.json';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
`;

const customStyles = {
  width: '100%',
  height: '100%',
};

const Home = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <AnimationRenderer
        animationData={animationData}
        autoPlay={true}
        resizeMode="cover"
        customStyles={customStyles}></AnimationRenderer>
    </Container>
  );
};

export default Home;
