import React, {useContext, useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AnimationRenderer from '../components/AnimationRenderer';
import {useTrackPlayerProgress} from 'react-native-track-player/lib/hooks';
import TrackPlayer from 'react-native-track-player';
import animationData from '../assets/Jellyfish.json';
import {Text, Button} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: '1',
    url: require('../assets/CountDownTwo.m4a'),
    type: 'default',
    title: 'Count Down',
    artist: 'Matt',
  });
  return true;
};

//useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
//These values will update every 250ms

const Meditate = (props) => {
  const {navigation, route} = props;

  const animationView = useRef(null);

  const handlePause = () => {
    TrackPlayer.pause();
    animationView.current.pause();
    console.log('handle pause');
  };

  const handlePlay = () => {
    TrackPlayer.play();
    animationView.current.play();
    console.log('handle play');
  };

  const handleBackButton = () => {
    navigation.navigate('Home');
    TrackPlayer.reset();
    animationView.current.reset();
    console.log('AUDIO RESET');
  };

  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    console.log('AUDIO RAN');
    const startPlayer = async () => {
      await trackPlayerInit();
      await handlePlay();
      let state = await TrackPlayer.getState();
      console.log(state);
    };
    startPlayer();
  });

  return (
    <Container>
      <Text>{route.params ? route.params.name : 'Timer'}</Text>
      <AnimationRenderer
        animationData={animationData}
        resizeMode="cover"
        animationRef={animationView}
        loop={false}
      />
      <Button title="Play" onPress={() => handlePlay()} />
      <Button title="Pause" onPress={() => handlePause()} />
      <Button title="Back" onPress={() => handleBackButton()} />
    </Container>
  );
};

export default Meditate;
