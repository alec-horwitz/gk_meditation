
import React, { useContext, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../context/ThemeStore'

const Stack = createStackNavigator();

const More = (props) => {
  const { navigation, route } = props;
  const context = React.useContext(ThemeContext);

  useEffect(() => {
    context.switchTheme('themeTwo');
  }, []);

  return (
    <LinearGradient
      colors={context.theme}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}>
      <View style={styles.flexContainer}>
        <Text>More</Text>

        <View>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Parents" onPress={() => navigation.navigate('Parents')} />
        <Button title="HowTo" onPress={() => navigation.navigate('HowTo')} />
        <Button title="Legal" onPress={() => navigation.navigate('Legal')} />
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
    justifyContent: 'center'
  }
})

export default More;