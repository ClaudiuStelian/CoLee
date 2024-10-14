import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import getDatabase from firebase/database
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Ensure both getAuth and initializeAuth are imported
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { Platform } from 'react-native';
import { getStorage } from 'firebase/storage'; // Import getStorage from firebase/storage

// Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyAbEjmmUOuvmfbM2RSnXlb16TAkaQUrIAQ",
    authDomain: "colee-cdcdc.firebaseapp.com",
    databaseURL: "https://colee-cdcdc-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "colee-cdcdc",
    storageBucket: "colee-cdcdc.appspot.com",
    messagingSenderId: "763984207954",
    appId: "1:763984207954:ios:5ad72dbe44b5cd69a37f8b"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize database and storage services
const database = getDatabase(app); // Ensure correct initialization of the Realtime Database
const storage = getStorage(app); // Ensure correct initialization of Firebase Storage

// Initialize Auth, handling different platforms
let auth;
if (Platform.OS === 'web') {
    auth = getAuth(app); // Use getAuth for web
} else {
    // Use initializeAuth for React Native, setting persistence to AsyncStorage
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage) 
    });
}

// Export app, database, auth, and storage to be used across the project
export { app, database, auth, storage };
