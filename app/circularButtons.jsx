import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Animated, PanResponder, Dimensions, Image } from 'react-native';

// Button images
const imageAssets = {
  rustb: require('@/assets/images/Rustb.png'),
  csb: require('@/assets/images/csb.png'),
  contact: require('@/assets/images/contact.png'),
  home: require('@/assets/images/home.png'),
  profile: require('@/assets/images/profile.png'),
  settings: require('@/assets/images/settings.png'),
};

// Page mapping
const pageMapping = {
  [imageAssets.home]: 0, // Home page
  [imageAssets.rustb]: 1, // Rustb page
  [imageAssets.csb]: 2, // Csb page
  [imageAssets.contact]: 3, // Contact page
  [imageAssets.profile]: 4, // Profile page
  [imageAssets.settings]: 5, // Settings page
};

const CircularButtons = ({ onButtonPress }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

  // Dynamically calculate button size based on screen dimensions
  const buttonSize = windowWidth * 0.12; // Adjust the multiplier as needed
  const radius = buttonSize * 1.2; // Distance from the center button to surrounding buttons

  const [isVisible, setIsVisible] = useState(false); // State for surrounding buttons visibility
  const [centralButtonImage, setCentralButtonImage] = useState(imageAssets.home); // Initial image for the central button
  const [surroundingImages, setSurroundingImages] = useState([
    imageAssets.rustb, 
    imageAssets.csb, 
    imageAssets.contact, 
    imageAssets.profile, 
    imageAssets.settings, 
  ]); // Images for surrounding buttons

  const rotation = useRef(new Animated.Value(0)).current; // Rotation value for surrounding buttons
  const scale = useRef(new Animated.Value(0)).current; // Scale value for surrounding buttons
  const centralButtonFall = useRef(new Animated.Value(0)).current; // Animation value for central button fall
  const surroundingScales = useRef(surroundingImages.map(() => new Animated.Value(0))).current; // Scale for each surrounding button
  const rotationValue = useRef(0); // To keep track of the rotation value
  const lastAngle = useRef(0); // To track the last angle
  const hideTimeout = useRef(null); // Timer reference for auto-hide

  const containerBottom = 100; // This should match the 'bottom' value in your container style
  const centerX = windowWidth / 2;
  const centerY = windowHeight - containerBottom - buttonSize; // Adjust centerY dynamically

  const handlePanResponderMove = (e, gestureState) => {
    const { moveX, moveY } = gestureState;

    const currentAngle = Math.atan2(moveY - centerY, moveX - centerX);
    const deltaAngle = currentAngle - lastAngle.current;

    rotationValue.current += deltaAngle;
    rotation.setValue(rotationValue.current);

    lastAngle.current = currentAngle;
    resetHideTimer();
  };

  const handlePanResponderRelease = () => {
    lastAngle.current = 0;
    startHideTimer();
  };

  const resetHideTimer = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
  };

  const startHideTimer = () => {
    resetHideTimer();
    hideTimeout.current = setTimeout(() => {
      toggleVisibility(false);
      startCentralButtonFall();
    }, 3000); // 3 seconds delay
  };

  const toggleVisibility = (visible) => {
    if (visible) {
      setIsVisible(true);
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: rotationValue.current,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.stagger(50, surroundingScales.map(anim => 
          Animated.timing(anim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          })
        )),
      ]).start();
      
      startHideTimer();
    } else {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.stagger(50, surroundingScales.map(anim => 
          Animated.timing(anim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          })
        )),
      ]).start(() => setIsVisible(false));
    }
  };

  const startCentralButtonFall = () => {
    const fallDistance = windowHeight - centerY + (buttonSize / 1.5);
    Animated.timing(centralButtonFall, {
      toValue: fallDistance,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const resetCentralButton = () => {
    Animated.timing(centralButtonFall, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSurroundingButtonPress = (image) => {
    const selectedPage = pageMapping[image]; // Get the page index from the image
    const updatedImages = [...surroundingImages];
    updatedImages[surroundingImages.indexOf(image)] = centralButtonImage;

    setCentralButtonImage(image);
    setSurroundingImages(updatedImages);

    // Trigger the page navigation here
    if (selectedPage !== undefined) {
      onButtonPress(selectedPage); // Navigate to the corresponding page index
    }

    toggleVisibility(false);
    startCentralButtonFall();
  };

  const handleCentralButtonPress = () => {
    if (!isVisible) {
      resetCentralButton();
    }
    toggleVisibility(!isVisible);
  };

  const handleTouch = () => {
    if (!isVisible) {
      resetCentralButton();
    }
    toggleVisibility(true);
  };

  useEffect(() => {
    return () => {
      resetHideTimer();
    };
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, Math.PI * 2],
    outputRange: ['0deg', '360deg'],
  });

  const scaleTransform = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fall = centralButtonFall.interpolate({
    inputRange: [0, windowHeight - centerY + (buttonSize / 0.15)],
    outputRange: [0, windowHeight - centerY + (buttonSize / 1.5)],
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderRelease,
    })
  ).current;

  return (
    <Pressable onPress={handleTouch} style={{ position: 'absolute' }}>
      <View style={[styles.container, { bottom: containerBottom }]}>
        <Animated.View style={[{
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2,
          transform: [{ translateY: fall }]
        }, styles.circleButton]}>
          <Pressable style={[{
            width: buttonSize,
            height: buttonSize,
            borderRadius: buttonSize / 2
          }, styles.circleButtonTouch]} onPress={handleCentralButtonPress}>
            <Image 
            source={centralButtonImage} style={[{
              width: buttonSize,
              height: buttonSize
            }, styles.buttonImage]} resizeMode="cover" />
          </Pressable>
        </Animated.View>

        {isVisible && (
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              width: buttonSize * 2,
              height: buttonSize * 2,
              transform: [{ rotate: spin }, { scale: scaleTransform }],
              zIndex: 1,
              position: 'absolute',
              left: '50%',
              marginLeft: -buttonSize,
            }}
          >
            {surroundingImages.map((image, index) => {
              const angle = (index / surroundingImages.length) * 2 * Math.PI - Math.PI / 2;
              const left = radius * Math.cos(angle);
              const top = radius * Math.sin(angle);

              const textRotation = rotation.interpolate({
                inputRange: [0, Math.PI * 2],
                outputRange: ['0deg', '-360deg'],
              });

              return (
                <Animated.View
                  key={index}
                  style={{
                    width: buttonSize,
                    height: buttonSize,
                    borderRadius: buttonSize / 2,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginLeft: left - buttonSize / 2,
                    marginTop: top - buttonSize / 2,
                    transform: [
                      { rotate: '0deg' },
                      { scale: surroundingScales[index] },
                    ],
                  }}
                >
                  <Pressable
                    onPress={() => handleSurroundingButtonPress(image)}
                    style={styles.surroundingButtonInner}
                  >
                    <Animated.Image
                      source={image}
                      style={{
                        width: buttonSize,
                        height: buttonSize,
                        transform: [{ rotate: textRotation }],
                      }}
                    />
                  </Pressable>
                </Animated.View>
              );
            })}
          </Animated.View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTouch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  surroundingButtonInner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default CircularButtons;
