import React, {useContext, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Animated,    
  Button,
  Text,
  TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore'

const gradientColors = {
  bottomDeepBlue: '#2d24bd',
  bottomMidBlue: '#3963c7',
  topLightPeach: '#ff8960',
  bottomTeal: '#22c1c3',
  topGold: '#fdbb2d',
  bottomBlue: '#3f5efb',
  topMagenta: '#fc466b',
  bottomPastelBlue: '#94bbe9',
  topPastelPink: '#eeaeca',
};

const Home = (props) => {
  const { route, navigation } = props;
  const context = React.useContext(ThemeContext);
  useEffect(() => {
    context.switchTheme(route.name);
  }, []);

  return (
    <LinearGradient
      colors={context.theme}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.circle}></View>
      <View style={styles.flexContainer}>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Meditate')}>
        <Icon style={styles.iconStyles} name='head-heart'></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Focus')}>
            <Icon style={styles.iconStyles} name='head-flash'></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('More')}>
          <Icon style={styles.iconStyles} name='script-text'></Icon>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: .75,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 0.20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
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
    fontSize: 75
  },
});

export default Home;