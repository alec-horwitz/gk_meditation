import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AnimationRenderer from '../components/AnimationRenderer';
import animationData from '../assets/cloud.json';
import {Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: white;
`;

let cameraObj: any;

const OCR = (props) => {
  const {navigation, route} = props;

  let capturedPhoto = null;

  takePicture = async () => {
    if (cameraObj) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraObj.takePictureAsync(options);
      capturedPhoto = data.uri
    }
  };

  // runOCR = () => {
    
  // }

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={e => (cameraObj = e)}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
      }}>
      </RNCamera>
      <View style={styles.frameContainer}>
        <Text style={styles.titleText}>{route.params ? route.params.name : 'OCR'}</Text>
        <View>
          <TouchableOpacity onPress={()=>takePicture()} style={styles.capture}>
            <Text> SNAP </Text>
          </TouchableOpacity>
          <Button title="Back" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  preview: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  titleText: {
    paddingTop: 20
  }
})


export default OCR;
