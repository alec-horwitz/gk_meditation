import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';

const Container = styled.View`
  background-color: lightgray;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ThemeSelect = (props) => {

  return (
    <Container>
      <Button title="Theme One" onPress={() => selectTheme('themeOne')} />
      <Button title="Theme Two" onPress={() => selectTheme('themeTwo')} />
      <Button title="Theme Three" onPress={() => selectTheme('themeThree')} />
    </Container>
  );
};

export default ThemeSelect;
