import React from 'react';
import styled from 'styled-components/native';
// import AnimationRenderer from '../components/AnimationRenderer';
// import animationData from '../assets/cloud.json';
import {Text, Button, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import RNFS from 'react-native-fs';
// import { v4 as uuidv4 } from 'uuid';





class OCR extends React.Component {
  state = {
    photo: null,
  }

  // createFormData = (photo) => {
  //   const data = new FormData();

  //   data.append("photo", {
  //     name: photo.fileName,
  //     type: photo.type,
  //     uri:
  //       Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  //   });
  //   console.log("Hello World! data: ", data)

  //   return data;
  // };

  handleUploadPhoto = () => {
    const {photo} = this.state

    const data = new FormData();

    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === "android" ? photo.uri : photo.uri.replace('file://', '/private')
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
        this.setState({ photo: null });
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        includeBase64: false,
      },
      (response) => {
        console.log("Hello World! response: ", response);
        this.setState({photo: response});
      },
    )
    // ImagePicker.launchImageLibrary(options, response => {
    //   if (response) {
    //     this.setState({ photo: response })
    //   }
    // })
  }

  render() {
    const { photo } = this.state
    const {navigation, route} = this.props;
    photo && this.handleUploadPhoto()
    return (
      <View style={{ flex: 1 }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <View style={styles.frameContainer}>
          <Text style={styles.titleText}>{route.params ? route.params.name : 'OCR'}</Text>
          <View>
            <TouchableOpacity onPress={this.handleChoosePhoto} style={styles.capture}>
              <Text> SNAP </Text>
            </TouchableOpacity>
            <Button title="Back" onPress={() => navigation.navigate('Home')} />
          </View>
        </View>
      </View>
    )
  }
}





// const Container = styled.View`
//   align-items: center;
//   justify-content: center;
//   flex: 1;
//   background: white;
// `;

// let cameraObj: any;

// const OCR = (props) => {
//   const {navigation, route} = props;

//   let capturedPhoto = null;
//   let OCResponse = null

//   runOCR = async (photoPath) => {

//     // const photo = {
//     //   uri: Platform.OS === 'android' ? photoPath : photoPath.replace('file://', ''),
//     //   type: "image/jpg",
//     //   name: photoPath.slice(photoPath.lastIndexOf("/")+1),
//     // };

//     // const form = new FormData();

//     // form.append("photo", photo);
//     // form.append("userId", uuidv4())

//     // RNFS.readFile(photoPath, 'base64')
//     // .then(base64photo =>{
//     //   console.log(base64photo);
//       fetch('http://192.168.0.184:3000/api/upload', {
//         method: 'post',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({text: "Hello World! Post Response!"})
//       }).catch(function(error) {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//       });
//       // .then(res => res.json()).then(res => {
//       //   console.log(res)
//       //   OCResponse = res
//       // })
//     // });
//   }

//   takePicture = async () => {
//     if (cameraObj) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraObj.takePictureAsync(options);
//       capturedPhoto = data.uri
//     }
//     console.log(capturedPhoto)
//     // runOCR(capturedPhoto)
//   };

//   return (
//     <View style={{flex: 1}}>
//       <RNCamera
//         ref={e => (cameraObj = e)}
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.off}
//         androidCameraPermissionOptions={{
//           title: 'Permission to use camera',
//           message: 'We need your permission to use your camera',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//         androidRecordAudioPermissionOptions={{
//           title: 'Permission to use audio recording',
//           message: 'We need your permission to use your audio',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//         onGoogleVisionBarcodesDetected={({barcodes}) => {
//           console.log(barcodes);
//       }}>
//       </RNCamera>
//       <View style={styles.frameContainer}>
//         <Text style={styles.titleText}>{route.params ? route.params.name : 'OCR'}</Text>
//         <View>{OCResponse}</View>
//         <View>
//           <TouchableOpacity onPress={()=>takePicture()} style={styles.capture}>
//             <Text> SNAP </Text>
//           </TouchableOpacity>
//           <Button title="Back" onPress={() => navigation.navigate('Home')} />
//         </View>
//       </View>
//     </View>
//   );
// };

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
