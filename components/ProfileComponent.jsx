import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithCredential,
  sendPasswordResetEmail,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import ProfileComponentLogIn from "./ProfileComponentLogIn";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, get, update } from "firebase/database"; // Import Realtime Database methods
import { Filter } from "profanity-check";

const { width } = Dimensions.get("window");
const baseFontSize = width * 0.03;

WebBrowser.maybeCompleteAuthSession();

const backgroundImage = require("../assets/images/v57_293.png");

const ProfileComponent = ({ navigation, setCurrentPageIndex }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(""); // State to store the display name
  const [newUsername, setNewUsername] = useState(""); // State for new username
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "763984207954-rvhjjrfgiik8lhoiqqmjt8dfrq57in3d.apps.googleusercontent.com",
    redirectUri: "http://localhost:8081",
  });

  const fetchUsername = async (userId) => {
    const db = getDatabase();
    const userRef = ref(db, "users/" + userId);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const userData = snapshot.val();
      setDisplayName(userData.username); // Set the username state
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUsername(currentUser.uid); // Fetch username when user is signed in
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (response) {
      console.log("Google Sign-In Response:", response);
      if (response.type === "success") {
        const { authentication } = response;
        if (authentication) {
          handleGoogleSignIn(authentication.accessToken);
        }
      }
    }
  }, [response]);

  const defaultFilter = new Filter(); // Create an instance of the Filter

  const handleUsernameChange = async () => {
    if (!newUsername) {
      Alert.alert("Error", "Please enter a new username.");
      return;
    }

    // Check for spaces in the username
    if (/\s/.test(newUsername)) {
      Alert.alert("Error", "Username should not contain spaces.");
      return;
    }

    // Check for bad words using the filter instance
    if (defaultFilter.isProfane(newUsername)) {
      // Use the instance here
      Alert.alert("Error", "Username contains inappropriate words.");
      return;
    }

    try {
      const db = getDatabase();
      const userId = user.uid; // Get the currently signed-in user's ID
      await update(ref(db, "users/" + userId), {
        username: newUsername, // Update the username in the database
      });
      setDisplayName(newUsername); // Update the display name in the component
      setNewUsername(""); // Clear the input field
      Alert.alert("Success", "Username updated successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleSignUp = async () => {
    if (!username || !email || !password || !repeatPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Check for spaces in the username
    if (/\s/.test(username)) {
      Alert.alert("Error", "Username should not contain spaces.");
      return;
    }

    // Check for bad words using the filter instance
    if (defaultFilter.isProfane(username)) {
      // Use the instance here
      Alert.alert("Error", "Username contains inappropriate words.");
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      // Store user details in Firebase Realtime Database
      const db = getDatabase();
      await set(ref(db, "users/" + userId), {
        username: username,
        email: email,
        createdAt: new Date().toISOString(),
      });

      Alert.alert("Success", "User registered successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "User signed in successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // Define the onRefresh function here
  const handleRefresh = async () => {
    if (user) {
      await fetchUsername(user.uid); // Ensure you refresh the username as well
    }
  };

  const handlePasswordReset = async () => {
    const auth = getAuth();

    // Check if the user is logged in
    if (user) {
      const userEmail = user.email; // Get the email from the current user

      if (!userEmail) {
        Alert.alert("Error", "User email not found.");
        return;
      }

      // Send password reset email using the logged-in user's email
      try {
        await sendPasswordResetEmail(auth, userEmail);
        Alert.alert("Success", "Password reset email sent!");
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    } else {
      // User is not logged in, check if the email is provided
      if (!email) {
        Alert.alert("Error", "Please enter your email address.");
        return;
      }

      // Send password reset email using the provided email
      try {
        await sendPasswordResetEmail(auth, email);
        Alert.alert("Success", "Password reset email sent!");
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    }
  };

  const handleGoogleSignIn = async (accessToken) => {
    try {
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(null, accessToken);
      const result = await signInWithCredential(auth, credential);

      const userInfoResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!userInfoResponse.ok) {
        throw new Error("Failed to fetch user info");
      }

      Alert.alert("Success", "User signed in with Google successfully!");
    } catch (error) {
      console.error("Error in Google Sign-In:", error);
      Alert.alert("Error", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      Alert.alert("Success", "User logged out successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const skipToHome = () => {
    setCurrentPageIndex(0);
  };

  // Function to handle opening modal with content
  const openModal = (type) => {
    if (type === "T&C") {
      setModalContent("Your Terms and Conditions content here.");
    } else if (type === "FAQ") {
      setModalContent("Your Frequently Asked Questions content here.");
    }
    setModalVisible(true);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={3}
    >
      <View style={styles.pageContentContainer}>
        {user ? (
          <ProfileComponentLogIn
            displayName={displayName}
            newUsername={newUsername}
            setNewUsername={setNewUsername}
            handleUsernameChange={handleUsernameChange}
            handleLogout={handleLogout}
            handleResetPassword={handlePasswordReset} // Pass the reset password function
            user={user}
            onRefreshLogin={handleRefresh} // Pass onRefresh to ProfileComponentLogIn
          />
        ) : (
          <>
            <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
            <Text style={styles.subtitle}>
              {isSignUp
                ? "Sign up now and unlock exclusive content."
                : "Welcome back! Please log in to continue."}
            </Text>

            {isSignUp && (
              <>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Costinatorul"
                  placeholderTextColor="#4E4E4E"
                  value={username}
                  onChangeText={setUsername}
                />
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email@mail.com"
                  placeholderTextColor="#4E4E4E"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="**********"
                  placeholderTextColor="#4E4E4E"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <Text style={styles.label}>Repeat Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="**********"
                  placeholderTextColor="#4E4E4E"
                  secureTextEntry
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                />
                <Text style={styles.termsText}>
                  By pressing the sign-up button, you agree to our terms and
                  conditions.
                </Text>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={handleSignUp}
                >
                  <Text style={styles.signUpButtonText}>SIGN UP</Text>
                </TouchableOpacity>
              </>
            )}

            {!isSignUp && (
              <>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email@mail.com"
                  placeholderTextColor="#4E4E4E"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="**********"
                  placeholderTextColor="#4E4E4E"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handleSignIn}
                >
                  <Text style={styles.signInButtonText}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePasswordReset}>
                  <Text style={styles.resetPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
              </>
            )}

            <Text style={styles.orText}>or</Text>

            <TouchableOpacity
              style={styles.googleButton}
              onPress={() => promptAsync()}
              disabled={!request}
            >
              <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={styles.toggleText}>
                {isSignUp
                  ? "Already have an account? SIGN IN"
                  : "Don’t have an account? SIGN UP"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.skipButton} onPress={skipToHome}>
              <Text style={styles.skipButtonText}>Skip to Home</Text>
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
            {/* Modal for T&C and FQ */}
            <Modal
              visible={isModalVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Content</Text>
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
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  updateButton: {
    backgroundColor: "#00CC66",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  updateButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  skipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#4E4E4E", // Change to your preferred style
    borderRadius: 5,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    width: "105%",
    height: "100%",
    marginLeft: "-2.5%", // Adjust margin if needed to center it
  },
  pageContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 41,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 5,
    marginBottom: 10,
  },
  termsText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: "#4E92B3",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  signUpButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signInButton: {
    backgroundColor: "#4E92B3",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  resetPasswordText: {
    color: "#4E92B3",
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: "#DB4437",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  googleButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  toggleText: {
    color: "#FFFFFF",
    marginTop: 10,
  },
  orText: {
    color: "#FFFFFF",
    marginVertical: 10,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc", // Adjust as needed
    borderRadius: 5, // Adjust as needed
    marginBottom: 10,
  },
  notificationsContainer: {
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#4E4E4E",
  },

  linkContainer: {
    flexDirection: "row",
    justifyContent: "center", // Center the text
    alignItems: "center", // Vertically center the text
    marginTop: "10%",
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
});

export default ProfileComponent;
