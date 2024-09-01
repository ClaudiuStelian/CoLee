import React, { useRef, useEffect, useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, PanResponder, Animated, Dimensions, Platform } from 'react-native';
import { Video } from 'expo-av';

const VideoModal = ({ visible, onClose, videoUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const [orientation, setOrientation] = useState(Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait');

  useEffect(() => {
    const updateLayout = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    const onDimensionsChange = () => updateLayout();

    const subscription = Dimensions.addEventListener('change', onDimensionsChange);
    
    // Initial update
    updateLayout();

    return () => {
      subscription?.remove();
    };
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, { dx, dy }) => {
        // Determine if the modal should close based on drag distance
        const horizontalDrag = Math.abs(dx) > Dimensions.get('window').width / 4;
        const verticalDrag = Math.abs(dy) > Dimensions.get('window').height / 4;
        
        if (horizontalDrag || verticalDrag) {
          closeModal();
        } else {
          // Reset position if not swiped enough to close
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 150,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const closeModal = () => {
    Animated.timing(pan, {
      toValue: {
        x: Math.sign(pan.x._value) * Dimensions.get('window').width,
        y: Math.sign(pan.y._value) * Dimensions.get('window').height,
      },
      duration: 150,
      useNativeDriver: false,
    }).start(() => onClose()); // Call onClose after animation completes
  };

  const toggleFullScreen = () => {
    setIsFullScreen(prev => !prev);
  };

  useEffect(() => {
    if (visible) {
      // Reset the pan value when the modal is opened
      pan.setValue({ x: 0, y: 0 });
    }
  }, [visible]);

  const modalContentStyle = isFullScreen
    ? { width: '100%', height: '100%' }
    : { width: '90%', height: '80%' };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <Animated.View
          style={[styles.modalContent, modalContentStyle, { transform: pan.getTranslateTransform() }]}
          {...panResponder.panHandlers}
        >
          <Video
            source={{ uri: videoUrl }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            shouldPlay
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  video: {
    width: '100%', // Make video width responsive
    height: '100%', // Make video height responsive
  },
});

export default VideoModal;
