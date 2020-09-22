import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore';

const Home = (props) => {
  const {route, navigation} = props;
  const theme = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={theme.home}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.circle} />
      <View style={styles.flexContainer} />
      <View style={styles.buttonContainer}>
        <theme.NavButton onPress={() => navigation.navigate('Meditate')}>
          <Icon style={styles.iconStyles} name="head-heart" />
        </theme.NavButton>
        <theme.NavButton onPress={() => navigation.navigate('Focus')}>
          <Icon style={styles.iconStyles} name="head-flash" />
        </theme.NavButton>
        <theme.NavButton onPress={() => navigation.navigate('More')}>
          <Icon style={styles.iconStyles} name="script-text" />
        </theme.NavButton>
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
  buttonStyles: {
    width: '30%%',
    height: '75%',
    borderWidth: 3,
    borderRadius: 20,
    borderRightColor: 'rgba(255, 255, 255, 0.25)',
    borderLeftColor: 'rgba(255, 255, 255, 0.20)',
    borderTopColor: 'rgba(255, 255, 255, 0.20)',
    borderBottomColor: 'rgba(255, 255, 255, 0.25)',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
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
