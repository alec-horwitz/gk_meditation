import React, {useContext, useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AnimationRenderer from '../components/AnimationRenderer';
import TrackPlayer from 'react-native-track-player';
import animationData from '../assets/Countdown_fixed.json';
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

const Meditate = (props) => {
  const {navigation, route} = props;

  const animationView = useRef(null);

  const handlePause = () => {
    animationView.current.pause();
    TrackPlayer.pause();
  };

  const handlePlay = () => {
    animationView.current.play();
    TrackPlayer.play();
  };

  const handleBackButton = () => {
    navigation.navigate('Home');
    animationView.current.reset();
    TrackPlayer.reset();
    console.log('AUDIO RESET');
  };

  //state to manage whether track player is initialized or not
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    console.log('AUDIO RAN');
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
      console.log(isTrackPlayerInit);
      if (isInit) {
        handlePlay();
      }
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
      <Button
        title="Play"
        disabled={!isTrackPlayerInit}
        onPress={() => handlePlay()}
      />
      <Button title="Pause" onPress={() => handlePause()} />
      <Button title="Back" onPress={() => handleBackButton()} />
    </Container>
  );
};

export default Meditate;
