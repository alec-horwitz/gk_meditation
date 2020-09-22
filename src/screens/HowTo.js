import React, {useContext} from 'react';
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

const HowTo = (props) => {
  const {navigation, route} = props;
  const theme = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={theme.home}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.flexContainer}>
        <Text>HowTo</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HowTo;
