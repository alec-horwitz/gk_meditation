import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import MeditateAudio from './MeditateAudio';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
`;

const AudioContainer = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, route} = props;
  let title = '';
  console.log(props);
  if (route.params && route.params.name) {
    title = route.params.name;
  } else {
    title = route.params.test;
  }

  return (
    <Container theme={theme}>
      <MeditateAudio title={title} navigation={navigation} />
    </Container>
  );
};

export default AudioContainer;
