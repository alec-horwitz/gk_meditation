import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import {Text} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
`;

const Parents = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Text>PARENTS</Text>
    </Container>
  );
};

export default Parents;
