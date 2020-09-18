
import React, {useContext,useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Animated,    
  Button,
  Text,
  TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const More = (props) => {
const {navigation, route} = props;
console.log(navigation)
  return (
    <Container>
      <Text>More</Text>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
      <View>
        <TouchableOpacity
          // style={styles.buttonStyles}
          onPress={() => navigation.navigate('Parents')}>
        <Text>parents</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.buttonStyles}
          onPress={() => navigation.navigate('HowTo')}>
            <Text>howto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.buttonStyles}
          onPress={() => navigation.navigate('Legal')}>
          <Text>legal</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default More;