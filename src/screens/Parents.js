import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Button} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const Parents = (props) => {
const {navigation, route} = props;

  return (
    <Container>
      <Text>PARENTS</Text>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

export default Parents;
