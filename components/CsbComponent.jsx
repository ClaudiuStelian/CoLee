// CsbComponent.jsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ExpandableList from './ExpandableList';
import { ref, get } from 'firebase/database';
import { database } from '../assets/data/firebaseConfig'; // Adjust the path to your firebaseConfig.js

const backgroundImage = require('../assets/images/wp12803700-counter-strike-2-wallpapers.jpg');

const fetchFonts = () => {
  return Font.loadAsync({
    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
};

const CsbComponent = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [items, setItems] = useState([]);

  // Define the getRandomBannerImage function outside useEffect to make it reusable
  const getRandomBannerImage = (bannerImages) => {
    if (bannerImages && bannerImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * bannerImages.length);
      return bannerImages[randomIndex];
    }
    return null; // Return null if there are no banner images
  };

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await fetchFonts();

        // Fetch data from Firebase
        const addsRef = ref(database, 'Adds');
        const csbcRef = ref(database, 'CSBc');

        const [addsSnapshot, csbcSnapshot] = await Promise.all([
          get(addsRef),
          get(csbcRef),
        ]);

        if (addsSnapshot.exists() && csbcSnapshot.exists()) {
          const addsData = addsSnapshot.val();
          const csbcData = csbcSnapshot.val();
          
          // Set initial banner image
          setBannerImage(getRandomBannerImage(addsData));
          setItems(csbcData);
        } else {
          console.log('No data available');
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const bannerImagesRef = ref(database, 'Adds');
      const snapshot = await get(bannerImagesRef);
      if (snapshot.exists()) {
        const bannerImages = snapshot.val();
        setBannerImage(getRandomBannerImage(bannerImages));
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = async () => {
    try {
      console.log('Refreshing data...');
      // Re-fetch data from Firebase
      const addsRef = ref(database, 'Adds');
      const csbcRef = ref(database, 'CSBc');

      const [addsSnapshot, csbcSnapshot] = await Promise.all([
        get(addsRef),
        get(csbcRef),
      ]);

      if (addsSnapshot.exists() && csbcSnapshot.exists()) {
        const addsData = addsSnapshot.val();
        const csbcData = csbcSnapshot.val();

        // Update the state with the new data
        setBannerImage(getRandomBannerImage(addsData));
        setItems(csbcData);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error refreshing data', error);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
        blurRadius={10}
      >
        <View style={styles.bannerWrapper}>
          {bannerImage && (
            <ImageBackground source={{ uri: bannerImage }} style={styles.bannerImage} resizeMode="cover" />
          )}
        </View>

        <ExpandableList 
          listItems={items} 
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          onRefresh={handleRefresh} // Pass the correct function
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bannerWrapper: {
    position: 'absolute',
    top: 37,
    left: 0,
    right: 0,
    height: 80,
    borderRadius: 30,
    overflow: 'hidden',
    marginHorizontal: 10,
    zIndex: 1,
  },
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
});

export default CsbComponent;
