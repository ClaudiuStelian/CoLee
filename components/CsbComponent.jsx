import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ExpandableList from './ExpandableList';
import { ref, get } from 'firebase/database';
import Banner from './Banner'; // Import the Banner component
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await fetchFonts();

        // Fetch data from Firebase
        const csbcRef = ref(database, 'CSBc');

        const csbcSnapshot = await get(csbcRef);

        if (csbcSnapshot.exists()) {
          const csbcData = csbcSnapshot.val();
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

  const handleRefresh = async () => {
    try {
      console.log('Refreshing data...');
      // Re-fetch data from Firebase
      const csbcRef = ref(database, 'CSBc');

      const csbcSnapshot = await get(csbcRef);

      if (csbcSnapshot.exists()) {
        const csbcData = csbcSnapshot.val();
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
        <Banner />

        <ExpandableList 
          listItems={items} 
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          onRefresh={handleRefresh}
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
});

export default CsbComponent;
