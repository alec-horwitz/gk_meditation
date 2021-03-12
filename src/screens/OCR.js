import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AnimationRenderer from '../components/AnimationRenderer';
import animationData from '../assets/cloud.json';
import {Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import RNFS from 'react-native-fs';
// import { v4 as uuidv4 } from 'uuid';

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
  let OCResponse = null

  runOCR = async (photoPath) => {

    // const photo = {
    //   uri: Platform.OS === 'android' ? photoPath : photoPath.replace('file://', ''),
    //   type: "image/jpg",
    //   name: photoPath.slice(photoPath.lastIndexOf("/")+1),
    // };

    // const form = new FormData();

    // form.append("photo", photo);
    // form.append("userId", uuidv4())

    // RNFS.readFile(photoPath, 'base64')
    // .then(base64photo =>{
    //   console.log(base64photo);
      fetch('http://192.168.0.184:3000/api/upload', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: "Hello World! Post Response!"})
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      // .then(res => res.json()).then(res => {
      //   console.log(res)
      //   OCResponse = res
      // })
    // });
  }

  takePicture = async () => {
    if (cameraObj) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraObj.takePictureAsync(options);
      capturedPhoto = data.uri
    }
    console.log(capturedPhoto)
    runOCR(capturedPhoto)
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={e => (cameraObj = e)}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
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
        <View>{OCResponse}</View>
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
