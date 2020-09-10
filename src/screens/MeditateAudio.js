import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import AnimationRenderer from '../components/AnimationRenderer';
import animationData from '../assets/cloud.json';
import {Text, Button} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
`;

const MeditateAudio = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;

  return (
    <Container theme={theme}>
      <Text>{route.params ? route.params.name : 'Timer'}</Text>
      <AnimationRenderer
        animationData={animationData}
        autoPlay={true}
        resizeMode="cover"
      />
      <Button title="Back" onPress={() => navigation.navigate('Meditate')} />
    </Container>
  );
};

export default MeditateAudio;
