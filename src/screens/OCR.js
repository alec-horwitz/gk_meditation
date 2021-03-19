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


class OCR extends React.Component {
  state = {
    photo: null,
    OCRTextOuptput: null
  }

  handleUploadPhoto = () => {
    const {photo} = this.state

    const data = new FormData();

    data.append("photo", {
      type: "image/jpg",
      name: photo.slice(photo.lastIndexOf("/")+1),
      uri: Platform.OS === 'android' ? photo : photo.replace('file://', '/private'),
    })

    console.log("Hello World! data: ", data)

    fetch('http://192.168.0.184:3000/api/upload', {
      method: 'post',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: data
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ OCRTextOuptput: response.result });
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
  };

  takePicture = async () => {
    if (cameraObj) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraObj.takePictureAsync(options);
      this.setState({photo: data.uri});
    }
  };

  render() {
    const { photo, OCRTextOuptput } = this.state
    const {navigation, route} = this.props;
    photo && !OCRTextOuptput && this.handleUploadPhoto()

    return (
      <View style={{flex: 1}}>
      { photo === null ?
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
        </RNCamera> : 
        <View style={styles.result}>
          <Text style={styles.resultText}>{OCRTextOuptput}</Text>
        </View>
      }
      <View style={styles.frameContainer}>
        <Text style={styles.titleText}>{route.params ? route.params.name : 'OCR'}</Text>
        <View>
          { photo === null ?
            <TouchableOpacity onPress={()=>this.takePicture()} style={styles.capture}>
              <Text> SNAP </Text>
            </TouchableOpacity> :
            <TouchableOpacity onPress={()=>this.setState({ photo: null,  OCRTextOuptput: null})} style={styles.capture}>
              <Text> Scan new word </Text>
            </TouchableOpacity>
          }
          <Button title="Back" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
    )
  }
}

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
  result: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    color: 'black',
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
