// Notification.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notification = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: '#4E92B3',
    padding: 15,
    borderRadius: 10,
    zIndex: 1000,
  },
  message: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Notification;
