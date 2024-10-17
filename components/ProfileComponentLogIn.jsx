import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { storage, database } from "../assets/data/firebaseConfig"; // Ensure proper imports
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage"; // For Storage
import { ref as dbRef, update, get, remove } from "firebase/database"; // For Realtime Database
import { getAuth, deleteUser } from "firebase/auth"; // Firebase Auth
import * as ImageManipulator from "expo-image-manipulator";

const { width } = Dimensions.get("window");
const baseFontSize = width * 0.03;

const ProfileComponentLogIn = ({
  displayName,
  newUsername,
  setNewUsername,
  handleUsernameChange,
  handleLogout,
  handleResetPassword,
  user,
  onRefreshLogin,
}) => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accountCreationDate, setAccountCreationDate] = useState("");

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
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    }
  };

    // Fetch user's email and account creation date
    const fetchUserInfo = async () => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
    
        if (currentUser) {
          setUserEmail(currentUser.email);
    
          // Firebase stores account creation time as a timestamp
          const creationTime = currentUser.metadata.creationTime;
          setAccountCreationDate(new Date(creationTime).toLocaleString());
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
      console.log("Resized image URI:", manipResult.uri); // Log the resized URI
      return manipResult.uri;
    } catch (error) {
      console.error("Error resizing image:", error);
      Alert.alert("Error", "Image resizing failed");
    }
  };

  // Pick an image from the gallery
  const pickImage = async () => {
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        alert("Permission to access media library is required!");
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
    } catch (error) {
      console.error("Error picking image:", error);
      alert("An error occurred while trying to access the photo library.");
    }
  };

  // Upload the selected image to Firebase storage
  const uploadImage = async (uri) => {
    if (!uri) {
      Alert.alert("Error", "No image selected");
      return;
    }
    if (!user || !user.uid) {
      Alert.alert("Error", "User not authenticated");
      return;
    }

    setLoading(true);
    const userId = user.uid;
    const fileName = uri.substring(uri.lastIndexOf("/") + 1);
    const storageRef = ref(storage, `profileImages/${userId}/${fileName}`);

    try {
      // Fetch the existing profile image URL
      const snapshot = await get(dbRef(database, `users/${userId}`));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.profileImageUrl) {
          // Get the reference to the existing image in Firebase Storage
          const existingImageRef = ref(storage, userData.profileImageUrl);
          // Delete the existing image
          await deleteObject(existingImageRef);
        }
      }

      // Now upload the new image
      const response = await fetch(uri);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const uploadSnapshot = await uploadBytes(storageRef, blob);

      if (uploadSnapshot && uploadSnapshot.ref) {
        // Get the new download URL
        const downloadURL = await getDownloadURL(uploadSnapshot.ref);
        // Save the new URL to the database
        await saveImageURLToDatabase(downloadURL);
      } else {
        throw new Error("Snapshot is undefined or does not contain a ref");
      }
    } catch (error) {
      Alert.alert("Error", "Image upload failed: " + error.message);
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
    } catch (error) {
      throw new Error("Database update failed: " + error.message);
    }
  };

  // Refresh control for pull-to-refresh functionality
  const onRefresh = async () => {
    onRefreshLogin();
    setRefreshing(true);
    await fetchProfileImage();
    setRefreshing(false);
  };

  // Load user's existing profile image if available
  useEffect(() => {
    fetchUserInfo();
    fetchProfileImage();
  }, [user]);

  // Function to handle opening modal with content
  const openModal = (type) => {
    if (type === "T&C") {
      setModalContent("Your Terms and Conditions content here.");
      setModalTitle("T&C")
    } else if (type === "FAQ") {
      setModalContent("Your Frequently Asked Questions content here.");
      setModalTitle("FAQ")
    } else if (type === "INFO"){
        setModalContent(`Email: ${userEmail}\nAccount Created: ${accountCreationDate}`)
        setModalTitle("INFO")
    }
    setModalVisible(true);
  };

  const handleDeleteAccount = async () => {
    if (user && user.uid) {
      try {
        // Ask for confirmation
        Alert.alert(
          "Delete Account",
          "Are you sure you want to delete your account? This action cannot be undone.",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Delete",
              onPress: async () => {
                try {
                  const userId = user.uid;

                  // Fetch user's profile image URL from Realtime Database
                  const snapshot = await get(
                    dbRef(database, `users/${userId}`)
                  );
                  if (snapshot.exists()) {
                    const userData = snapshot.val();
                    if (userData.profileImageUrl) {
                      // Delete profile image from Firebase Storage
                      const profileImageRef = ref(
                        storage,
                        userData.profileImageUrl
                      );
                      await deleteObject(profileImageRef);
                    }
                  }

                  // Delete user data from Realtime Database
                  await remove(dbRef(database, `users/${userId}`));

                  // Delete the user's authentication account
                  const auth = getAuth();
                  const currentUser = auth.currentUser;
                  if (currentUser) {
                    await deleteUser(currentUser);
                    Alert.alert(
                      "Account Deleted",
                      "Your account and associated data have been deleted successfully."
                    );
                    handleLogout(); // Optionally log out after account deletion
                  }
                } catch (error) {
                  console.error("Error deleting account:", error);
                  Alert.alert(
                    "Error",
                    "An error occurred while deleting your account."
                  );
                }
              },
            },
          ]
        );
      } catch (error) {
        console.error("Error in account deletion process:", error);
      }
    } else {
      Alert.alert("Error", "User is not authenticated");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Vertical Stack using View */}
      <View style={styles.verticalStack}>
        <TouchableOpacity
          onPress={pickImage}
          disabled={loading}
          style={styles.imageContainer}
        >
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
        <TouchableOpacity
           onPress={() => openModal("INFO")}
          style={styles.threeDotsContainer}
        >
          <Text style={styles.threeDots}>•••</Text>
        </TouchableOpacity>

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
            <TouchableOpacity
              onPress={handleUsernameChange}
              style={styles.pencilButton}
            >
              <Icon name="pencil" size={20} color="#00CC66" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>LOG OUT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetPasswordButton}
            onPress={handleResetPassword}
          >
            <Text style={styles.resetPasswordButtonText}>RESET PASSWORD</Text>
          </TouchableOpacity>
        </View>
        {/* Delete Account Button */}
        <TouchableOpacity
          style={styles.deleteAccountButton}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.deleteAccountButtonText}>DELETE ACCOUNT</Text>
        </TouchableOpacity>
        {/* Terms & Conditions and FAQs Links */}
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => openModal("T&C")}>
            <Text style={styles.linkText}>T&C</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity onPress={() => openModal("FAQ")}>
            <Text style={styles.linkText}>FAQ</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal for T&C and FQ */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text style={styles.modalText}>{modalContent}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    width: "100%",
    height: "80%",
    justifyContent: "flex-start", // Align children at the top
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#FFA500",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#FF7373",
  },
  verticalStack: {
    flexDirection: "column",
    justifyContent: "flex-start", // Align items at the top
    alignItems: "center",
    width: "100%",
    marginTop: "20%", // Space from the top
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#FF7373",
  },
  profilePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#4E92B3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: "10%",
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 5,
    marginTop: "15%",
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#4E92B3",
    width: "100%",
    paddingHorizontal: 5,
  },
  inputUsername: {
    flex: 1,
    height: 40,
    color: "#FFFFFF",
    paddingHorizontal: 10,
  },
  pencilButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row", // Aligns buttons in a row
    justifyContent: "space-between", // Space between buttons
    width: "100%",
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: "#FF4C4C",
    padding: 15,
    borderRadius: 15,
    width: "48%",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#FF0000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#FF7373",
  },
  resetPasswordButton: {
    backgroundColor: "#FFB84C",
    padding: 15,
    borderRadius: 15,
    width: "48%",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#FFA500",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#FF7373",
  },
  deleteAccountButton: {
    backgroundColor: "#FF0000",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#FF0000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#FF7373",
  },
  deleteAccountButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textShadowColor: "#FFB3B3",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize: baseFontSize,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textShadowColor: "#FFB3B3",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize: baseFontSize, // Dynamically calculated font size
  },
  resetPasswordButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textShadowColor: "#FFB3B3",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontSize: baseFontSize, // Dynamically calculated font size
  },
  changeImageIcon: {
    position: "absolute",
    bottom: 5,
    left: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly transparent background for better visibility
    borderRadius: 15,
    padding: 5,
  },
  imageContainer: {
    position: "relative", // Needed to position the icon absolutely
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center", // Center the text
    alignItems: "center", // Vertically center the text
    marginTop: "20%",
  },
  linkText: {
    color: "#00CC66",
    textDecorationLine: "underline",
    paddingHorizontal: 5, // Add some spacing between the text and separator
  },
  separator: {
    color: "#00CC66", // Matches the link text color
    paddingHorizontal: 5, // Add space around the separator
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: baseFontSize * 1.5,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: baseFontSize,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#00CC66",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
  },
  threeDotsContainer: {
    padding: 5,
  },
  threeDots: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});

export default ProfileComponentLogIn;
