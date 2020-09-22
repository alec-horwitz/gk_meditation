import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../context/ThemeStore';
import Carousel from '../components/Carousel';

const Parents = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={theme.home}
      style={styles.container}
      locations={[0.08, 0.55, 1]}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 0}}>
      <Carousel
        style="slides"
        itemsPerInterval={1}
        items={[
          {
            title: 'Who we are',
            copy: 'lorem ipsum here',
          },
          {
            title: 'What we are doing',
            copy: 'lorem ipsum here',
          },
          {
            title: 'Why we are doing it',
            copy: 'lorem ipsum here',
          },
          {
            title: 'Get in touch',
            copy: 'lorem ipsum here',
          },
        ]}
      />
      {/* <View style={styles.flexContainer}>
        <Text>Parents</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Parents;
