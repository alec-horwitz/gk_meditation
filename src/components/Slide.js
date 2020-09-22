import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export const Slide = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  console.log(screenHeight)
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