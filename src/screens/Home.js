import React, {useContext} from 'react';
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

const Home = () => {

  return (
    <Container >
      <AnimationRenderer
        animationData={animationData}
        autoPlay={true}
        resizeMode="cover"
        customStyles={customStyles}></AnimationRenderer>
    </Container>
  );
};

export default Home;
