import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Button, View} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const MeditateTimeLine = ({navigation}) => {

  return (
    <Container>
      {meditationList.map((data) => (
        <View key={data.id}>
          <Button
            title={data.name}
            onPress={() => navigation.navigate('Bed Time', data)}></Button>
        </View>
      ))}
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

export default MeditateTimeLine;
