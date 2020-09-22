import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import {Button, View} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
`;

const MeditateTimeLine = ({navigation}) => {
  const {theme, meditationList} = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      {meditationList.map((data) => (
        <View key={data.id}>
          <Button
            title={data.name}
            onPress={() => navigation.navigate('Bed Time', data)}
          />
        </View>
      ))}
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

export default MeditateTimeLine;
