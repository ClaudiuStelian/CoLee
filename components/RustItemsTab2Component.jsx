import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const preprocessData = (data) => data.map((item, index) => ({
  ...item,
  id: item.id || `item-${index}`,
}));

export const Tab2 = ({ item, setSwipeEnabled }) => {
  const [activeTab, setActiveTab] = useState(null); // Track active tab
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity value
  const itemList = preprocessData(item.legends || []);

  useEffect(() => {
    // Animate text appearance based on activeTab
    Animated.timing(fadeAnim, {
      toValue: activeTab ? 1 : 0,
      duration: 300, // Duration of the animation
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [activeTab]);

  const handleTabPress = (id) => {
    setActiveTab(activeTab === id ? null : id); // Toggle tab display
  };

  const handleZoomChange = (zoomLevel) => {
    if (zoomLevel > 1) {
      setSwipeEnabled(false); // Disable swipe when zooming
    } else {
      setSwipeEnabled(true); // Re-enable swipe when zoom is reset
    }
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.splitView}>
        {/* Tabs positioned at a slightly lower position */}
        <View style={styles.tabRowContainer}>
          <ScrollView 
            contentContainerStyle={styles.listContentContainer} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} // Hide the scroll bar
          >
            <View style={styles.tabRow}>
              {itemList.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.tabShape, { backgroundColor: item.dotColour }]}
                  onPress={() => handleTabPress(item.id)}
                >
                  <View style={styles.tabInnerShape} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.listContainerTop}>
          {/* Animated text description */}
          <Animated.View style={[styles.legendContainer, { opacity: fadeAnim }]}>
            <Text style={styles.legendDescription}>
              {activeTab ? itemList.find((i) => i.id === activeTab)?.legend : ''}
            </Text>
          </Animated.View>
        </View>

        <View style={styles.imageContainerBottom}>
          <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            captureEvent={true}
            onZoomAfter={(event, gestureState, zoomableViewEventObject) =>
              handleZoomChange(zoomableViewEventObject.zoomLevel)
            }
          >
            <Image
              style={styles.image}
              source={{ uri: item.rustmap }}
              resizeMode="cover"
            />
          </ReactNativeZoomableView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  splitView: {
    flex: 1,
    flexDirection: 'column',
  },
  tabRowContainer: {
    position: 'absolute',
    top: width * 0.05, // Adjust based on the desired position
    left: 0,
    right: 0,
    height: width * 0.1, // Height of the tab row
    backgroundColor: 'transparent', // Background color if needed
    zIndex: 1, // Ensure it stays above other elements
    alignItems: 'center', // Center the tabs horizontally
    justifyContent: 'center', // Center the tabs vertically
  },
  listContainerTop: {
    flex: 1,
    marginTop: width * 0.1 + 10, // Push content below the tabs by height + padding
    overflow: 'hidden',
    borderRadius: width * 0.025, // Border radius for the list container
  },
  imageContainerBottom: {
    flexShrink: 1,
    height: '60%', // 60% of screen height for the image container
    borderWidth: 5,
    borderColor: '#CE422B',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: '12%',
  },
  zoomableView: {
    flex: 1, // Ensure the zoomable view takes full space of its container
  },
  image: {
    width: '100%',
    height: '100%',
  },
  listContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingLeft: width * 0.02, // 2% padding left
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tabShape: {
    width: width * 0.1, // Size of the tab
    height: width * 0.1, // Size of the tab
    borderRadius: width * 0.1 / 2, // Circular shape
    marginHorizontal: width * 0.02, // Space between shapes
    elevation: 5, // Shadow for Android
    backgroundColor: '#ffffff',
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 6, // Shadow radius for iOS
    justifyContent: 'center', // Center content within the shape
    alignItems: 'center', // Center content within the shape
  },
  tabInnerShape: {
    width: width * 0.06, // Slightly smaller inner shape
    height: width * 0.06, // Slightly smaller inner shape
    borderRadius: width * 0.06 / 2, // Circular inner shape
    backgroundColor: '#FFF', // Inner shape color
  },
  legendContainer: {
    flex: 1, // Take full height of the container
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  legendDescription: {
    fontSize: scale(12),
    color: 'gray',
    textAlign: 'center',
  },
});

export default Tab2;
