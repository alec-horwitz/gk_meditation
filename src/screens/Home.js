import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore';

const NavButton = styled.TouchableOpacity`
  width: 30%;
  height: 75%;
  border: 3px solid white;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

const Home = (props) => {
  const {navigation} = props;
  const {home, Container, FlexContainer} = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={home}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.circle} />
      <FlexContainer />
      <View style={styles.buttonContainer}>
        <NavButton onPress={() => navigation.navigate('OCR')}>
          <Icon style={styles.iconStyles} name="camera-iris" />
        </NavButton>
        <NavButton onPress={() => navigation.navigate('Meditate')}>
          <Icon style={styles.iconStyles} name="head-heart" />
        </NavButton>
        <NavButton onPress={() => navigation.navigate('Focus')}>
          <Icon style={styles.iconStyles} name="head-flash" />
        </NavButton>
        <NavButton onPress={() => navigation.navigate('More')}>
          <Icon style={styles.iconStyles} name="script-text" />
        </NavButton>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 0.75,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: 'rgba(255, 137, 96, 0.6)',
    position: 'absolute',
    top: -300,
    left: -200,
  },
  iconStyles: {
    color: 'white',
    fontSize: 75,
  },
});

export default Home;
