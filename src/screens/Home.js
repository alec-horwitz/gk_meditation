import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import AnimationRenderer from '../components/AnimationRenderer';
import animationData from '../assets/testMorph.json';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const customStyles = {
  width: '100%',
  height: '100%',
};

const CircleShapeView = styled.View`
  width: 150;
  height: 150;
  borderRadius: 150 / 2;
  backgroundColor: white;
`;

const gradientColors = {
  bottomDeepBlue: '#2d24bd',
  bottomMidBlue: '#3963c7',
  topLightPeach: '#ff8960',
  bottomTeal: '#22c1c3',
  topGold: '#fdbb2d',
  bottomBlue: '#3f5efb',
  topMagenta: '#fc466b',
  bottomPastelBlue: '#94bbe9',
  topPastelPink: '#eeaeca'
}

const Home = (props) => {
  const { navigation } = props
  return (
    <LinearGradient
        colors={[gradientColors.bottomDeepBlue, gradientColors.bottomMidBlue, gradientColors.topLightPeach]}
        style={styles.container}
        locations={[0.08, 0.55, 1]}
        start={{ x: 1, y: 1}}
        end={{ x: 0, y: 0 }}>
          <View style={styles.circle}>

          </View>
        <Text>I am Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Meditate')}>
          <Text >Go to Meditate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Focus')}>
          <Text >Go to Focus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('More')}>
          <Text >Go to More</Text>
        </TouchableOpacity>
      </LinearGradient>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    left: -175,
  }
})

export default Home;


  /* <AnimationRenderer
        animationData={animationData}
        autoPlay={true}
        resizeMode="cover"
        customStyles={customStyles}></AnimationRenderer> */

 /* <TouchableOpacity
        onPress={() => navigation.navigate('Meditate')}>
        <Text>Go to Meditate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Focus')}>
        <Text>Go to Focus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('More')}>
        <Text>Go to More</Text>
      </TouchableOpacity> */

  /* </Container> */

