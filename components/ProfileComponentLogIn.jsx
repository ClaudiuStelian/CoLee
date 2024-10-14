import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator, ScrollView, RefreshControl  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { storage, database } from '../assets/data/firebaseConfig'; // Ensure proper imports
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // For Storage
import { ref as dbRef, update, get } from 'firebase/database'; // For Realtime Database
import * as ImageManipulator from 'expo-image-manipulator';

const { width } = Dimensions.get('window');
const baseFontSize = width * 0.03;

const ProfileComponentLogIn = ({ displayName, newUsername, setNewUsername, handleUsernameChange, handleLogout, handleResetPassword, user }) => {
    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    // Fetch user's existing profile image URL from the database
    const fetchProfileImage = async () => {
        if (user && user.uid) {
            try {
                const snapshot = await get(dbRef(database, `users/${user.uid}`));
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    if (userData.profileImageUrl) {
                        setProfileImage(userData.profileImageUrl);
                    }
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching profile image:', error);
            }
        }
    };

    // Resize the selected image
    const resizeImage = async (uri) => {
        try {
            const manipResult = await ImageManipulator.manipulateAsync(
                uri,
                [{ resize: { width: 1000, height: 1000 } }],
                { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
            );
            console.log('Resized image URI:', manipResult.uri); // Log the resized URI
            return manipResult.uri;
        } catch (error) {
            console.error('Error resizing image:', error);
            Alert.alert('Error', 'Image resizing failed');
        }
    };

    // Pick an image from the gallery
    const pickImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access media library is required!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const selectedImage = result.assets[0].uri;
            const resizedImageUri = await resizeImage(selectedImage);
            setProfileImage(resizedImageUri);
            await uploadImage(resizedImageUri);
        }
    };

    // Upload the selected image to Firebase storage
    const uploadImage = async (uri) => {
        if (!uri) {
            Alert.alert('Error', 'No image selected');
            return;
        }
        if (!user || !user.uid) {
            Alert.alert('Error', 'User not authenticated');
            return;
        }

        setLoading(true);
        const userId = user.uid;
        const fileName = uri.substring(uri.lastIndexOf('/') + 1);
        const storageRef = ref(storage, `profileImages/${userId}/${fileName}`);

        try {
            console.log('Uploading image from URI:', uri);
            const response = await fetch(uri);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            console.log('Blob created successfully:', blob);
            console.log('Storage Reference:', storageRef);

            const snapshot = await uploadBytes(storageRef, blob);
            console.log('Upload successful:', snapshot);

            if (snapshot && snapshot.ref) {
                const downloadURL = await getDownloadURL(snapshot.ref);
                console.log('Download URL:', downloadURL);

                try {
                    await saveImageURLToDatabase(downloadURL);
                } catch (error) {
                    console.error('Failed to save URL to database:', error);
                    Alert.alert('Error', 'Failed to save URL to database: ' + error.message);
                }
            } else {
                throw new Error('Snapshot is undefined or does not contain a ref');
            }
        } catch (error) {
            console.error('Upload error:', error);
            Alert.alert('Error', 'Image upload failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const saveImageURLToDatabase = async (downloadURL) => {
        try {
            const userId = user.uid;
            await update(dbRef(database, `users/${userId}`), {
                profileImageUrl: downloadURL,
            });
            console.log('Image URL saved to database successfully');
        } catch (error) {
            console.error('Error saving image URL to database:', error);
            throw new Error('Database update failed: ' + error.message);
        }
    };

    // Refresh control for pull-to-refresh functionality
    const onRefresh = async () => {
      setRefreshing(true);
      await fetchProfileImage(); // Fetch the image again
      setRefreshing(false);
    };

    // Load user's existing profile image if available
    useEffect(() => {
        fetchProfileImage(); // Fetch the image URL when the component mounts
    }, [user]);

    return (
          <ScrollView 
          contentContainerStyle={styles.container}
          refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
            <TouchableOpacity onPress={pickImage} disabled={loading} style={styles.imageContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#00CC66" />
                ) : profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                    <View style={styles.profilePlaceholder}>
                        <Icon name="user" size={50} color="#FFFFFF" />
                    </View>
                )}
                <View style={styles.changeImageIcon}>
                    <Icon name="plus" size={24} color="#FFFFFF" />
                </View>
            </TouchableOpacity>

            <Text style={styles.title}>{displayName || "User"}</Text>

            <Text style={styles.label}>Change Username</Text>
            <View style={styles.usernameContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputUsername}
                        placeholder="New Username"
                        placeholderTextColor="#4E4E4E"
                        value={newUsername}
                        onChangeText={setNewUsername}
                    />
                    <TouchableOpacity onPress={handleUsernameChange} style={styles.pencilButton}>
                        <Icon name="pencil" size={20} color="#00CC66" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>LOG OUT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resetPasswordButton} onPress={handleResetPassword}>
                    <Text style={styles.resetPasswordButtonText}>RESET PASSWORD</Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: { 
    marginTop:"20%",
    width: '100%', // Set width to 110% to exceed screen width
    height: '80%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(28, 28, 28, 0.8)', 
    padding: 20, 
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    marginBottom: 15, 
    borderWidth: 2, 
    borderColor: '#4E92B3' 
  },
  profilePlaceholder: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    backgroundColor: '#4E92B3', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginBottom: 20 
  },
  label: { 
    color: '#FFFFFF', 
    marginBottom: 5 
  },
  usernameContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 5, 
    width: '100%' 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 5, 
    marginBottom: 10, 
    width: '100%' 
  },
  inputUsername: { 
    flex: 1, 
    padding: 10, 
    color: '#FFFFFF' 
  },
  pencilButton: { 
    padding: 10 
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
  },
  logoutButton: {
    backgroundColor: '#FF4C4C',
    padding: 15,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#FF7373',
  },
  resetPasswordButton: {
    backgroundColor: '#FFB84C',
    padding: 15,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#FFA500',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#FF7373',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#FFB3B3',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize: baseFontSize, // Dynamically calculated font size
  },
  resetPasswordButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#FFB3B3',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize: baseFontSize, // Dynamically calculated font size
  },
  imageContainer: {
    position: 'relative', // Needed to position the icon absolutely
  },
  changeImageIcon: {
    position: 'absolute',
    bottom: 5,
    left: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent background for better visibility
    borderRadius: 15,
    padding: 5,
  },
});

export default ProfileComponentLogIn;
