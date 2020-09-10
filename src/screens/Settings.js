import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import {Text, Button} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
`;

const Settings = ({navigation}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Text>SETTINGS</Text>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

export default Settings;
