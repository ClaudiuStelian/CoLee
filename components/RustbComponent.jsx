// RustbComponent.js

import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ExpandableList from './ExpandableList';
import Banner from './Banner';
import { ref, get } from 'firebase/database';
import { database } from '../assets/data/firebaseConfig';

const backgroundImage = require('../assets/images/v58_442.png');

const RustbComponent = () => {
  const [items, setItems] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const fetchItems = useCallback(async () => {
    try {
      const csbcRef = ref(database, 'Rustb');
      const snapshot = await get(csbcRef);
      if (snapshot.exists()) {
        const csbcData = snapshot.val();
        setItems(csbcData);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }, []);

  useEffect(() => {
    fetchItems(); // Initial fetch
  }, [fetchItems]);

  const handleRefresh = useCallback(async () => {
    try {
      console.log('Refreshing data...');
      await fetchItems(); // Re-fetch items from Firebase
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  }, [fetchItems]);

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

export default RustbComponent;
