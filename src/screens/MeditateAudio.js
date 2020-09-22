import React, {useContext, useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {ThemeContext} from '../context/ThemeStore';
import AnimationRenderer from '../components/AnimationRenderer';
import TrackPlayer from 'react-native-track-player';
import animationData from '../assets/cloudAnim.json';
import {Text, Button} from 'react-native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.gradientTop};
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

const MeditateAudio = (props) => {
  const {theme} = useContext(ThemeContext);
  const {navigation, title} = props;

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
    navigation.navigate('Meditate');
    animationView.current.reset();
    TrackPlayer.reset();
    console.log('AUDIO RESET');
  };

  //state to manage whether track player is initialized or not
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  console.log(props);
  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    console.log('AUDIO RAN');
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
      if (isInit) {
        handlePlay();
      }
    };
    startPlayer();
  });

  return (
    <Container theme={theme}>
      <Text>{props.title}</Text>
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

export default MeditateAudio;
