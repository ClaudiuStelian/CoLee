import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const backgroundImage = require('../assets/images/v57_293.png');

const SettingsComponent = () => (
  <ImageBackground source={backgroundImage}
  style={styles.backgroundImage}
  resizeMode='cover'
  blurRadius={3}
  >
    <View style={styles.pageContentContainer}>
      <Text style={styles.pageContent}>Home Page</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pageContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContent: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SettingsComponent;
