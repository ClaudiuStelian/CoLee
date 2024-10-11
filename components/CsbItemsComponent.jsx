import React, { useState, useRef, useEffect } from 'react';
import { View, Platform, StyleSheet, Image, TouchableOpacity, Animated, ImageBackground, Dimensions, Text } from 'react-native';
import { Svg, Line, Marker, Polygon, G, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const CsbItemsComponent = ({ item, circleSize, openVideoLink, animationValue }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedGrenade, setSelectedGrenade] = useState('molotovct');
    const [visibleLines, setVisibleLines] = useState({});
    const switchAnim = useRef(new Animated.Value(0)).current;
    const backgroundAnim = useRef(new Animated.Value(0)).current;
    const grenadeOpacity = useRef(new Animated.Value(1)).current;
    const lineAnimation = useRef(new Animated.Value(0)).current;
    const AnimatedLine = Animated.createAnimatedComponent(Line);
    const pulseAnim = useRef(new Animated.Value(1)).current;

    const imageAssets = {
        molotovct: require('@/assets/images/molotovct.png'),
        molotov: require('@/assets/images/molotovtero.png'),
        smoke: require('@/assets/images/v58_636.png'),
        flashbang: require('@/assets/images/stungrenade.png'),
        grenade: require('@/assets/images/grenade.png'),
    };

    const startPulseAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.2, // Scale up
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1, // Scale back down
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    useEffect(() => {
        startPulseAnimation();
    }, []);

    const toggleSwitch = () => {
        Animated.timing(grenadeOpacity, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start(() => {
            setIsSwitchOn(prevState => {
                const newState = !prevState;
                const newGrenadeType = newState ? 'molotovct' : 'molotov';
                setSelectedGrenade(newGrenadeType);
                return newState;
            });

            Animated.timing(switchAnim, {
                toValue: isSwitchOn ? 0 : 1,
                duration: 300,
                useNativeDriver: false,
            }).start();

            Animated.timing(backgroundAnim, {
                toValue: isSwitchOn ? 0 : 1,
                duration: 300,
                useNativeDriver: false,
            }).start();

            Animated.timing(grenadeOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    const switchTranslateX = switchAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 60],
    });

    const backgroundOpacity = backgroundAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });

    const positions = item.tutorials?.[isSwitchOn ? 'counter-terrorist' : 'terrorist']?.[selectedGrenade]?.positions || [];

    const changeGrenade = (newGrenade) => {
        Animated.timing(grenadeOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setSelectedGrenade(newGrenade);
            Animated.timing(grenadeOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    const toggleLines = (index) => {
        setVisibleLines({ [index]: true });
        Animated.timing(lineAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const dashOffset = lineAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
    });

    const isWeb = Platform.OS === 'web';

    const convertToPixels = (value, total) => {
        return (parseFloat(value) / 100) * total;
    };

    return (
        <Animated.View
            style={[
                styles.itemDetails,
                {
                    opacity: animationValue.interpolate({
                        inputRange: [60, 300],
                        outputRange: [0, 1],
                    }),
                },
            ]}
        >
            {item.tutorials && (
                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={{ uri: item.map }}
                        style={styles.itemDetailsImage}
                        resizeMode="stretch"
                        onError={(error) => console.log('Error loading image', error)}
                    >
                        <Svg style={styles.svg}>
                            {positions.map((tutorial, index) =>
                                tutorial.destinations.map((destination, destIndex) => {
                                    const startX = convertToPixels(tutorial.position[0], width);
                                    const startY = convertToPixels(tutorial.position[1], height);
                                    const endX = convertToPixels(destination.destination[0], width);
                                    const endY = convertToPixels(destination.destination[1], height);

                                    return (
                                        visibleLines[index] && (
                                            isWeb ? (
                                                <Line
                                                    key={`${index}-${destIndex}`}
                                                    x1={startX}
                                                    y1={startY}
                                                    x2={endX}
                                                    y2={endY}
                                                    stroke="orange"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeDasharray="10"
                                                />
                                            ) : (
                                                <AnimatedLine
                                                    key={`${index}-${destIndex}`}
                                                    x1={startX}
                                                    y1={startY}
                                                    x2={endX}
                                                    y2={endY}
                                                    stroke="red"
                                                    strokeWidth="3"
                                                    strokeLinecap="orange"
                                                    strokeDasharray="10"
                                                    strokeDashoffset={dashOffset}
                                                />
                                            )
                                        )
                                    );
                                })
                            )}
                        </Svg>
                        
                        {positions.map((tutorial, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.tutorialImageContainer,
                                    {
                                        top: convertToPixels(tutorial.position[1], height),
                                        left: convertToPixels(tutorial.position[0], width),
                                        width: 0,
                                        height: 0,
                                    },
                                ]}
                                onPress={() => {
                                    toggleLines(index); // Toggle lines only for this grenade
                                }}
                                activeOpacity={0.7}
                            >
                                <Animated.View style={[styles.circle, { width: circleSize, height: circleSize, opacity: grenadeOpacity }]}>
                                    <View style={styles.layer1}></View>
                                    <View style={styles.layer2}></View>
                                    <View style={styles.layer3}></View>
                                    <View style={styles.layer4}></View>

                                    <Animated.Image
                                        source={imageAssets[selectedGrenade]}
                                        style={[styles.tutorialImage, { opacity: grenadeOpacity }]}
                                        resizeMode="contain"
                                    />
                                </Animated.View>
                            </TouchableOpacity>
                        ))}
                        {positions.map((tutorial, index) =>
                            tutorial.destinations.map((destination, destIndex) => {
                                const endX = convertToPixels(destination.destination[0], width);
                                const endY = convertToPixels(destination.destination[1], height);

                                return (
                                    visibleLines[index] && (  // Only render if lines are visible
                                        <TouchableOpacity
                                            key={`arrow-${index}-${destIndex}`}
                                            style={{
                                                position: 'absolute',
                                                top: endY,
                                                left: endX,
                                                transform: [{ translateX: -24 }, { translateY: -15 }],
                                            }}
                                            onPress={() => openVideoLink(destination.linkVideo)} // Open video link
                                            activeOpacity={0.7}
                                        >
                                            <Image
                                                source={require('@/assets/images/Group_2525.png')} // Use `source` instead of `xlinkHref`
                                                style={{
                                                    width: width * 0.065,
                                                    height: height * 0.03,
                                                }}
                                                resizeMode="stretch"
                                            />
                                        </TouchableOpacity>
                                    )
                                );
                            })
                        )}

                    </ImageBackground>
                </View>
            )}

            <View style={styles.bottomContainer}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer} activeOpacity={1}>
                        <ImageBackground
                            source={require('../assets/images/wp12803700-counter-strike-2-wallpapers.jpg')}
                            style={styles.switchBackground}
                            imageStyle={styles.switchBackgroundImage}
                        >
                            <Animated.View style={[styles.switchBackground, { opacity: backgroundOpacity }]}>
                                <ImageBackground
                                    source={require('../assets/images/cs2_3.png')}
                                    style={styles.switchBackground}
                                    imageStyle={styles.switchBackgroundImage}
                                />
                            </Animated.View>
                            <Animated.View style={[styles.switchThumb, { transform: [{ translateX: switchTranslateX }] }]}>
                                <View style={styles.innerThumb}>
                                    <View style={styles.thumbLayer1}></View>
                                    <View style={styles.thumbLayer2}></View>
                                    <View style={styles.thumbLayer3}></View>
                                    <View style={styles.thumbLayer4}></View>
                                </View>
                            </Animated.View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={styles.rightContainer}>
                    <TouchableOpacity
                        style={[styles.buttonRight, { borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderWidth: 2 }]}
                        onPress={() => changeGrenade(isSwitchOn ? 'molotovct' : 'molotov')}
                    >
                        <View style={styles.buttonImageContainer}>
                            <Image source={imageAssets[isSwitchOn ? 'molotovct' : 'molotov']} style={styles.grenadeImage} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonRight, { borderTopWidth: 2, borderBottomWidth: 2 }]}
                        onPress={() => changeGrenade('smoke')}
                    >
                        <View style={styles.buttonImageContainer}>
                            <Image source={imageAssets.smoke} style={styles.grenadeImage} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonRight, { borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2 }]}
                        onPress={() => changeGrenade('flashbang')}
                    >
                        <View style={styles.buttonImageContainer}>
                            <Image source={imageAssets.flashbang} style={styles.grenadeImage} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonRight, { borderTopRightRadius: 30, borderBottomRightRadius: 30, borderWidth: 2 }]}
                        onPress={() => changeGrenade('grenade')}
                    >
                        <View style={styles.buttonImageContainer}>
                            <Image source={imageAssets.grenade} style={styles.grenadeImage} resizeMode="contain" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    itemDetails: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        flex: 1, // This will make it take all available space
    },
    itemDetailsImage: {
        position: 'absolute',
        borderWidth: 5,
        borderColor: 'orange',
        width: '100%',
        height: '100%', // Set to 100% to fill the parent
        borderRadius: 5,
    },
    tutorialImageContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    layer1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,165,0,0.66)', // Orange with opacity
        borderRadius: 9999, // Fully rounded
    },
    layer2: {
        position: 'absolute',
        width: '90%',  // Slightly smaller than layer 1
        height: '90%',
        backgroundColor: 'rgba(230,149,0,1)', // Slightly darker orange
        borderRadius: 9999, // Fully rounded
    },
    layer3: {
        position: 'absolute',
        width: '80%', // Smaller than layer 2
        height: '80%',
        backgroundColor: 'rgba(241,156,1,1)', // Even darker orange
        borderRadius: 9999, // Fully rounded
    },
    layer4: {
        position: 'absolute',
        width: '70%', // Smallest layer
        height: '70%',
        backgroundColor: 'rgba(171,110,0,1)', // Dark brown
        borderRadius: 9999, // Fully rounded
    },
    tutorialImage: {
        width: '100%',
        height: '100%',
    },
    grenadeImage: {
        width: '150%',
        height: '150%',
    },
    buttonImageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: height * 0.02,
        marginTop: height * 0.1,
    },
    leftContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        marginLeft: width * 0.06,
        alignItems: 'center',
    },
    switchContainer: {
        width: 120,
        height: height * 0.06,
        borderRadius: 15,
        justifyContent: 'center',
        position: 'relative',
    },
    switchBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    switchBackgroundImage: {
        borderRadius: 30,
        borderWidth: 2,           // Add border width
        borderColor: 'black',     // Add border color (e.g., black)
    },
    switchThumb: {
        width: 60,
        height: height * 0.06,
        borderRadius: 30,
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerThumb: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    thumbLayer1: {
        width: 60,
        height: height * 0.06,
        backgroundColor: 'rgba(255,165,0,0.66)', // Orange with opacity
        borderRadius: 30,
        position: 'absolute',
    },
    thumbLayer2: {
        width: 55,
        height: 55,
        backgroundColor: 'rgba(230,149,0,1)', // Slightly darker orange
        borderRadius: 30,
        position: 'absolute',
    },
    thumbLayer3: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(241,156,1,1)', // Even darker orange
        borderRadius: 30,
        position: 'absolute',
    },
    thumbLayer4: {
        width: 45,
        height: 45,
        backgroundColor: 'rgba(171,110,0,1)', // Dark brown
        borderRadius: 30,
        position: 'absolute',
    },
    buttonRight: {
        backgroundColor: 'orange',
        height: height * 0.06,
        width: height * 0.06,
        // marginLeft: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',     // Add border color (e.g., black)
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    arrow: {
        position: 'absolute',
        width: 60,
        height: 60,
    },
});

export default CsbItemsComponent;
