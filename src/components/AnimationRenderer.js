import React, { useRef, useState } from "react";
import { View, Text, Button } from "react-native";
import LottieView from "lottie-react-native";

const AnimationRenderer = (props) => {
  const {
    animationData,
    autoPlay,
    resizeMode,
    loop,
    speed,
    customStyles,
  } = props;

  const defaultStyles = {
    width: 200,
    height: 300,
    position: "relative",
  };

  // useEffect(() => {
  //   let isPlaying = true;
  //   let interval;
  //   console.log("useEffect");
  //
  //   if (animationView) {
  //     console.log({ animationView: Object.keys(animationView.current) });
  //     interval = setInterval(() => {
  //       console.log({ isPlaying });
  //       if (isPlaying) {
  //         console.log("pause");
  //         animationView.current.pause();
  //       } else {
  //         console.log("resume");
  //         animationView.current.resume();
  //       }
  //
  //       isPlaying = !isPlaying;
  //     }, 2000);
  //   } else {
  //     console.log("no animation view :(");
  //   }
  //
  //   return () => {
  //     clearInterval(interval);
  //
  //     if (this.myAnimationView) {
  //       this.myAnimationView.reset();
  //     }
  //   };
  // }, []);

  const animationView = useRef(null);

  const handlePause = () => {
    console.log(animationView.current.pause());
    animationView.current.pause();
  };

  const handleResume = () => {
    animationView.current.resume();
  };

  return (
    <View>
      <LottieView
        ref={animationView}
        source={animationData}
        autoPlay={autoPlay}
        speed={speed}
        loop={loop}
        style={customStyles ? customStyles : defaultStyles}
        resizeMode={resizeMode}
      />
      <Button title="Pause" onPress={() => handlePause()}></Button>
      <Button title="Resume" onPress={() => handleResume()}></Button>
    </View>
  );
};

export default AnimationRenderer;
