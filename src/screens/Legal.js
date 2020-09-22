import React, {useContext, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const Legal = (props) => {
  const {navigation, route} = props;
  const {home, FlexContainer} = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={home}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <FlexContainer>
        <Text>Legal</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </FlexContainer>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Legal;
