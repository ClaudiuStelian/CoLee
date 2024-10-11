import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const preprocessData = (data) => data.map((item, index) => ({
  ...item,
  id: item.id || `item-${index}`,
}));

const ListItem = React.memo(({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemName}>{item.name}</Text>
    <Image source={{ uri: item.picture }} style={styles.itemImage} />
  </View>
));

export const Tab1 = ({ item, openVideoLink }) => {
  const itemList = preprocessData(item.requiredItems || []);

  const renderItem = useCallback(({ item }) => (
    <ListItem item={item} />
  ), []);

  return (
    <View style={styles.tabContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitleText}>{item.details || "Default Title"}</Text>
      </View>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.watchButton} onPress={() => openVideoLink(item.tutorial)}>
        <Text style={styles.watchButtonText}>Watch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    marginBottom: Dimensions.get('window').height * 0.1, // 10% of screen height
    alignItems: 'center',
  },
  itemTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  listItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderRadius: 8,
    padding: Dimensions.get('window').height * 0.01,
    marginVertical: -Dimensions.get('window').height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
    borderRadius: 8,
    marginRight: Dimensions.get('window').width * 0.03,
  },
  itemName: {
    fontSize: scale(15),
    color: 'white',
  },
  watchButton: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.1,
    left: '50%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.25 }],
    backgroundColor: '#CE422B',
    paddingVertical: Dimensions.get('window').height * 0.015,
    paddingHorizontal: Dimensions.get('window').width * 0.2,
    borderRadius: 8,
  },
  watchButtonText: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Tab1;
