import React from 'react'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'

export const Slide = (props) => {
  const { navigation } = props;
  const screenHeight = Math.round(Dimensions.get('window').height);
  const { title, copy } = props;

  return (
    <View style={styles.slide}>
      <Text style={{ ...styles.slideTitleText }}>
        {title}
      </Text>
      <Text style={{ ...styles.slideCopyText }}>
        {copy}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // 896 should be a dynamically retrieved screen/device height but its not wrking
    height: 896 * 0.8,
  },
  slideTitleText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold'
  },
  slideCopyText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 18,
  }
});

export default Slide;