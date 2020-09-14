import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const Parents = () => {

  return (
    <Container>
      <Text>PARENTS</Text>
    </Container>
  );
};

export default Parents;
