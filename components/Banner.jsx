import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { ref, get } from 'firebase/database';
import { database } from '../assets/data/firebaseConfig'; // Adjust the path to your firebaseConfig.js

const getRandomBannerImage = (bannerImages) => {
  if (bannerImages && bannerImages.length > 0) {
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    return bannerImages[randomIndex];
  }
  return null; // Return null if there are no banner images
};

const Banner = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [link, setLink] = useState(null);

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const bannerImagesRef = ref(database, 'Adds');
        const snapshot = await get(bannerImagesRef);
        if (snapshot.exists()) {
          const bannerImages = snapshot.val();
          const randomBanner = getRandomBannerImage(bannerImages);
          setBannerImage(randomBanner);
          if (randomBanner) {
            setLink(randomBanner.addLink); // Set the link for the selected banner
          }
        }
      } catch (error) {
        console.error('Error fetching banner image:', error);
      }
    };

    fetchBannerImage(); // Initial fetch

    const intervalId = setInterval(fetchBannerImage, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handlePress = () => {
    if (link) {
      Linking.openURL(link).catch((err) => console.error('Failed to open URL:', err));
    }
  };

  return (
    <View style={styles.bannerWrapper}>
      {bannerImage && (
        <TouchableOpacity onPress={handlePress} style={styles.bannerImageWrapper}>
          <ImageBackground source={{ uri: bannerImage.addposter }} style={styles.bannerImage} resizeMode="cover" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  bannerImageWrapper: {
    flex: 1, // Ensure that the TouchableOpacity takes up the full space of the ImageBackground
  },
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
});

export default Banner;
