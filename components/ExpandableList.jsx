import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Animated, ImageBackground, Linking, RefreshControl, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VideoModal from './VideoModal'; // Adjust the path based on where VideoModal is located

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
        animationValues.current[index] = new Animated.Value(60);
      }
    });
  }, [listItems]);

  const handlePress = (index) => {
    if (!animationValues.current[index]) {
      animationValues.current[index] = new Animated.Value(60);
    }

    if (expandedIndex === index) {
      Animated.timing(animationValues.current[index], {
        toValue: 60,
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
        toValue: 300,
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
            inputRange: [60, 300],
            outputRange: [60, 500],
          });

          const ImageExpandHeight = animationValues.current[index].interpolate({
            inputRange: [60, 300],
            outputRange: [130, 500],
          });

          const containerOpacity = expandedIndex === index ? 0.1 : 1;

          return (
            <View style={styles.listItemContainer}>
              <TouchableOpacity onPress={() => handlePress(index)} style={styles.itemTitle}>
                <Animated.View style={[styles.itemImageContainer, { height: ImageExpandHeight }]}>
                  <ImageBackground
                    source={{ uri: item.titleMap }}
                    style={[styles.itemTitleBackground, { opacity: containerOpacity }]}
                    resizeMode="cover"
                  />
                </Animated.View>
                <Animated.View style={[styles.gradientWrapper, { height: expandHeight }]}>
                  <LinearGradient
                    colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.5)']}
                    style={styles.textWrapper}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.itemTitleText}>{item.title}</Text>
                    {expandedIndex === index && (
                      <Animated.View
                        style={[
                          styles.itemDetails,
                          {
                            opacity: animationValues.current[index].interpolate({
                              inputRange: [60, 300],
                              outputRange: [0, 1],
                            }),
                          },
                        ]}
                      >
                        {item.tutorials &&(<ImageBackground
                          source={{ uri: item.map }}
                          style={styles.itemDetailsImage}
                          resizeMode="stretch"
                          onError={(error) => console.log('Error loading image', error)}
                        >
                          {Object.entries(item.tutorials.positions).map(([key, tutorial]) => (
                            <TouchableOpacity
                              key={key}
                              style={[
                                styles.tutorialImageContainer,
                                {
                                  top: tutorial.position[1],
                                  left: tutorial.position[0],
                                  width: circleSize,
                                  height: circleSize,
                                },
                              ]}
                              onPress={() => openVideoLink(tutorial.linkVideo)}
                              activeOpacity={0.7}
                            >
                              <View style={[styles.circle, { width: circleSize, height: circleSize }]}>
                                <Image
                                  source={{ uri: item.tutorials.tutorialImage }}
                                  style={styles.tutorialImage}
                                  resizeMode="contain"
                                />
                              </View>
                            </TouchableOpacity>
                          ))}
                        </ImageBackground>)}
                        <Text style={styles.itemTitleText}>{item.details}</Text>
                      </Animated.View>
                    )}
                  </LinearGradient>
                </Animated.View>
              </TouchableOpacity>
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
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  itemDetailsImage: {
    width: '100%',
    height: "100%",
    borderRadius: 5,
  },
  tutorialImageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tutorialImage: {
    width: '100%',
    height: '100%',
  },
});

export default ExpandableList;
