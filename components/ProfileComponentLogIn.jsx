import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker'; // If you're using Expo

const ProfileComponentLogIn = ({ displayName, newUsername, setNewUsername, handleUsernameChange, handleLogout, handleResetPassword }) => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access media library
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access media library is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.profilePlaceholder}>
            <Icon name="user" size={50} color="#FFFFFF" />
          </View>
        )}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: '105%', 
    height: '80%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(28, 28, 28, 0.8)', // Added transparency
    padding: 20, 
    borderRadius: 20, // Softer edges
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
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-between', // Space out the buttons
    width: '100%', // Full width for the container
  },
  logoutButton: {
    backgroundColor: '#FF4C4C', // Bright red color
    padding: 15,
    borderRadius: 15, // Increased borderRadius for softer edges
    width: '48%', // Adjust width to fit side by side
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#FF0000', // Red shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#FF7373',
  },
  resetPasswordButton: {
    backgroundColor: '#FFB84C', // Orange color for contrast
    padding: 15,
    borderRadius: 15,
    width: '48%', // Adjust width to fit side by side
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#FFA500', // Orange shadow
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
    textShadowColor: '#FFB3B3', // Light red text shadow for shiny effect
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize:12.5,
  },
  resetPasswordButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#FFE5B3', // Light orange text shadow for shiny effect
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize:12.5,
  },
});

export default ProfileComponentLogIn;
