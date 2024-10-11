import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithCredential,
  sendPasswordResetEmail, // Import the reset function
} from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Import Firestore

WebBrowser.maybeCompleteAuthSession();

const backgroundImage = require('../assets/images/v57_293.png');

const ProfileComponent = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '763984207954-rvhjjrfgiik8lhoiqqmjt8dfrq57in3d.apps.googleusercontent.com',
    redirectUri: 'http://localhost:8081',
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (response) {
      console.log('Google Sign-In Response:', response);
      if (response.type === 'success') {
        const { authentication } = response;
        console.log('Authentication:', authentication);
        if (authentication) {
          handleGoogleSignIn(authentication.accessToken);
        }
      }
    }
  }, [response]);

  // Sign Up Function
  const handleSignUp = async () => {
    // Check for empty fields
    if (!username || !email || !password || !repeatPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Error', "Passwords don't match");
      return;
    }

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'User registered successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Sign In Function
  const handleSignIn = async () => {
    // Check for empty fields
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'User signed in successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };


  // Password Reset Function
  const handlePasswordReset = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Google Sign-In Function
  const handleGoogleSignIn = async (accessToken) => {
    try {
      const auth = getAuth();
      
      const credential = GoogleAuthProvider.credential(null, accessToken);
      const result = await signInWithCredential(auth, credential);

      const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!userInfoResponse.ok) {
        throw new Error('Failed to fetch user info');
      }

      const userInfo = await userInfoResponse.json();
      console.log('User Info:', userInfo);

      const db = getFirestore();
      const userDoc = doc(db, 'users', result.user.uid);
      await setDoc(userDoc, {
        username: username,
        email: userInfo.email,
        createdAt: new Date(),
      });

      Alert.alert('Success', 'User signed in with Google successfully!');
    } catch (error) {
      console.error('Error in Google Sign-In:', error);
      Alert.alert('Error', error.message);
    }
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      Alert.alert('Success', 'User logged out successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
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
          <>
            <Text style={styles.title}>Welcome, {user.email}</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>LOG OUT</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
            <Text style={styles.subtitle}>
              {isSignUp
                ? 'Inscrie-te acum si deblocheaza contentul exclusiv'
                : 'Welcome back! Please log in to continue.'}
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
                <Text style={styles.label}>Adresa de email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email@mail.com"
                  placeholderTextColor="#4E4E4E"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.label}>Parola</Text>
                <TextInput
                  style={styles.input}
                  placeholder="**********"
                  placeholderTextColor="#4E4E4E"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <Text style={styles.label}>Repeta parola</Text>
                <TextInput
                  style={styles.input}
                  placeholder="**********"
                  placeholderTextColor="#4E4E4E"
                  secureTextEntry
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                />
                <Text style={styles.termsText}>
                  Apasand pe butonul de inscriere esti de acord cu termenii si conditiile noastre
                </Text>
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                  <Text style={styles.signUpButtonText}>SIGN UP</Text>
                </TouchableOpacity>
              </>
            )}

            {!isSignUp && (
              <>
                <Text style={styles.label}>Adresa de email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email@mail.com"
                  placeholderTextColor="#4E4E4E"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.label}>Parola</Text>
                <TextInput
                  style={styles.input}
                  placeholder="**********"
                  placeholderTextColor="#4E4E4E"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
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
                {isSignUp ? 'Already have an account? SIGN IN' : 'Don’t have an account? SIGN UP'}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pageContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 41,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  subtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 5,
    marginBottom: 10,
  },
  termsText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: '#4E92B3',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#4E92B3',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resetPasswordText: {
    color: '#4E92B3',
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#DB4437',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  orText: {
    color: '#FFFFFF',
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: '#4E92B3',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProfileComponent;
