import React, { useState, useMemo } from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Tab1 } from './RustItemsTab1Component';
import { Tab2 } from './RustItemsTab2Component';

const { width } = Dimensions.get('window');

const RustItemsComponent = ({ item, openVideoLink }) => {
  const [index, setIndex] = useState(0);
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [routes] = useState([
    { key: 'tab1', title: 'Home' },
    { key: 'tab2', title: 'Settings' },
  ]);

  const renderScene = useMemo(
    () =>
      SceneMap({
        tab1: () => <Tab1 item={item} openVideoLink={openVideoLink} />,
        tab2: () => <Tab2 item={item} setSwipeEnabled={setSwipeEnabled} />, // Pass setSwipeEnabled
      }),
    [item, openVideoLink]
  );

  const handleDotPress = (newIndex) => setIndex(newIndex);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        swipeEnabled={swipeEnabled} // Conditionally enable/disable swipe
        renderTabBar={() => null}
      />
      <View style={styles.dotContainer}>
        {routes.map((_, dotIndex) => (
          <TouchableOpacity
            key={dotIndex}
            style={[styles.dot, index === dotIndex && styles.activeDot]}
            onPress={() => handleDotPress(dotIndex)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dotContainer: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.02, // 2% from bottom
    right: Dimensions.get('window').width * 0.05, // 5% from right
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: Dimensions.get('window').width * 0.1, // 10% width
    height: Dimensions.get('window').height * 0.015, // 1.5% height
    borderRadius: Dimensions.get('window').height * 0.01, // Rounded corners
    backgroundColor: 'gray',
    marginHorizontal: Dimensions.get('window').width * 0.01, // 1% margin
  },
  activeDot: {
    backgroundColor: '#CE422B', // Active dot color
  },
});

export default RustItemsComponent;
