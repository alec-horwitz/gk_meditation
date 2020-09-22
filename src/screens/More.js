import React, {useContext, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/ThemeStore';

const More = (props) => {
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textStyle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigation.navigate('Parents')}>
            <Text style={styles.textStyle}>Parents</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigation.navigate('HowTo')}>
            <Text style={styles.textStyle}>101</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() =>
              Linking.openURL(
                'mailto:frank@thefrankharvey.com?subject=Suggestion&body=Description',
              )
            }>
            <Text style={styles.textStyle}>Suggestion Box</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigation.navigate('Legal')}>
            <Text style={styles.textStyle}>Legal</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  buttonStyles: {
    margin: 15,
    padding: 20,
    borderRadius: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#15114D',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.6,
    shadowRadius: 12.35,

    elevation: 19,
  },
  textStyle: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3963c7',
  },
});

// width: '30%%',
// height: '75%',
// borderWidth: 3,
// borderRadius: 20,
// borderRightColor: 'rgba(255, 255, 255, 0.25)',
// borderLeftColor: 'rgba(255, 255, 255, 0.20)',
// borderTopColor: 'rgba(255, 255, 255, 0.20)',
// borderBottomColor: 'rgba(255, 255, 255, 0.25)',
// backgroundColor: 'transparent',
// alignItems: 'center',
// justifyContent: 'center',

export default More;
