import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, Image, Easing } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import CircularButtons from '../app/circularButtons';

// Import the individual page components
import HomeComponent from './HomeComponent';
import RustbComponent from './RustbComponent';
import CsbComponent from './CsbComponent';
import ContactComponent from './ContactComponent';
import ProfileComponent from './ProfileComponent';
import SettingsComponent from './SettingsComponent';

// Get screen dimensions
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

// Define backgrounds for each page
const pages = [
  { key: 'Home', component: HomeComponent, background: require('../assets/images/v57_293.png') },
  { key: 'Rustb', component: RustbComponent, background: require('../assets/images/v58_442.png') },
  { key: 'Csb', component: CsbComponent, background: require('../assets/images/wp12803700-counter-strike-2-wallpapers.jpg') },
  { key: 'Contact', component: ContactComponent, background: require('../assets/images/v57_293.png') },
  { key: 'Profile', component: ProfileComponent, background: require('../assets/images/v57_293.png') },
  { key: 'Settings', component: SettingsComponent, background: require('../assets/images/v57_293.png') },
];

const MainPage = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Lock orientation to portrait mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  // Function to handle page changes with animations
  const handlePageChange = useCallback((index) => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPageIndex(index);
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [scaleAnim, opacityAnim]);

  const CurrentPageComponent = pages[currentPageIndex].component;
  const currentBackground = pages[currentPageIndex].background;

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image source={currentBackground} style={styles.backgroundImage} resizeMode='cover' />
        <Animated.View style={[styles.cardContainer, { transform: [{ scale: scaleAnim }], opacity: opacityAnim }]}>
          <CurrentPageComponent />
        </Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        <CircularButtons onButtonPress={handlePageChange} />
      </View>
    </View>
  );
};

// StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    backgroundColor: 'black', // Set a background color to avoid flickering
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: windowWidth,
    height: windowHeight,
  },
  cardContainer: {
    width: windowWidth,
    height: windowHeight,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainPage;
