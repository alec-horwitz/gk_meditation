import React, {useEffect, useRef} from 'react';
import {View, Text, Button} from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationRenderer = (props) => {
  const {
    animationData,
    autoPlay,
    resizeMode,
    loop,
    speed,
    customStyles,
    animationRef,
  } = props;

  const defaultStyles = {
    width: 200,
    height: 300,
    position: 'relative',
  };

  return (
    <View>
      <LottieView
        ref={animationRef}
        source={animationData}
        autoPlay={autoPlay}
        speed={speed}
        loop={loop}
        style={customStyles ? customStyles : defaultStyles}
        resizeMode={resizeMode}
      />
    </View>
  );
};

export default AnimationRenderer;
