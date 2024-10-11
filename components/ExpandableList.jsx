import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Animated, ImageBackground, RefreshControl, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VideoModal from './VideoModal'; // Adjust the path based on where VideoModal is located
import CsbItemsComponent from './CsbItemsComponent';
import RustItemsComponent from './RustItemsComponent'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ExpandableList = ({ listItems, expandedIndex, setExpandedIndex, onRefresh }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  
  const animationValues = useRef([]);
  const flatListRef = useRef(null);
  const [refreshing, setRefreshing] = useState(false);

  // Initialize animation values
  useEffect(() => {
    listItems.forEach((_, index) => {
      if (!animationValues.current[index]) {
        animationValues.current[index] = new Animated.Value(60); // Initial height of collapsed item
      }
    });
  }, [listItems]);

  const handlePress = (index) => {
    if (!animationValues.current[index]) {
      animationValues.current[index] = new Animated.Value(60);
    }

    if (expandedIndex === index) {
      Animated.timing(animationValues.current[index], {
        toValue: 60, // Collapsed state
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpandedIndex(null));
    } else {
      if (expandedIndex !== null && animationValues.current[expandedIndex]) {
        Animated.timing(animationValues.current[expandedIndex], {
          toValue: 60,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }

      setExpandedIndex(index);

      Animated.timing(animationValues.current[index], {
        toValue: screenHeight * 0.5, // Expanded state to 50% of screen height
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        flatListRef.current.scrollToIndex({ index, viewPosition: 0 });
      });
    }
  };

  const openVideoLink = (link) => {
    setVideoUrl(link);
    setModalVisible(true);
  };

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await onRefresh();
    } catch (error) {
      console.error('Error refreshing data', error);
    } finally {
      setRefreshing(false);
    }
  }, [onRefresh]);

  const closeVideoModal = () => {
    setModalVisible(false);
    setVideoUrl('');
  };

  const circleSize = Math.min(screenWidth, screenHeight) * 0.07;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={listItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          
          if (!animationValues.current[index]) {
            animationValues.current[index] = new Animated.Value(60);
          }

          const expandHeight = animationValues.current[index].interpolate({
            inputRange: [60, screenHeight * 0.5], // Interpolating to 50% of the screen height
            outputRange: [60, screenHeight * 0.7], // Adjust based on screen height
          });

          const ImageExpandHeight = animationValues.current[index].interpolate({
            inputRange: [60, screenHeight * 0.5],
            outputRange: [130, screenHeight * 0.7], // Adjust image size based on screen height
          });

          const containerOpacity = expandedIndex === index ? 0.1 : 1;

          return (
            <View style={styles.listItemContainer}>
                <TouchableOpacity onPress={() => handlePress(index)} style={styles.itemTitle} activeOpacity={1}>
                  <Animated.View style={[styles.itemImageContainer, { height: ImageExpandHeight }]}>
                      <ImageBackground
                        source={{ uri: item.titleMap }}
                        style={[styles.itemTitleBackground, { opacity: containerOpacity }]}
                        resizeMode="cover"
                      />
                  </Animated.View>
                </TouchableOpacity>
                <Animated.View style={[styles.gradientWrapper, { height: expandHeight }]}>
                  <LinearGradient
                    colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.5)']}
                    style={styles.textWrapper}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <TouchableOpacity onPress={() => handlePress(index)} style={styles.itemTitle} activeOpacity={1}>
                      <Text style={styles.itemTitleText}>{item.title}</Text>
                    </TouchableOpacity>
                    {/* Pass relevant props to CsbItemsComponent */}
                    {expandedIndex === index && item.map && (
                      <CsbItemsComponent
                        item={item}
                        circleSize={circleSize}
                        openVideoLink={openVideoLink}
                        animationValue={animationValues.current[index]}
                      />
                    )}
                    {expandedIndex === index && item.rustmap && (
                      <RustItemsComponent
                        item={item}
                        openVideoLink={openVideoLink}
                      />
                    )}
                  </LinearGradient>
                </Animated.View>
            </View>
          );
        }}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        style={styles.flatlistcontainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
      <VideoModal
        visible={modalVisible}
        onClose={closeVideoModal}
        videoUrl={videoUrl}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  flatlistcontainer: {
    flex: 1,
    top: 70,
  },
  listContainer: {
    marginTop: 70,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: '100%',
  },
  listItemContainer: {
    marginBottom: 30,
    borderRadius: 30,
    overflow: 'hidden',
  },
  itemTitle: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 30,
  },
  itemImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 30,
  },
  itemTitleBackground: {
    width: '100%',
    height: '100%',
  },
  gradientWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    fontFamily: 'space-mono',
  },
});

export default ExpandableList;
