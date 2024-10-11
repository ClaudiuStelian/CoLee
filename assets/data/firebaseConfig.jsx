import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { Platform } from 'react-native';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";


var auth = {}

const firebaseConfig = {
    apiKey: "AIzaSyAbEjmmUOuvmfbM2RSnXlb16TAkaQUrIAQ",
    authDomain: "colee-cdcdc.firebaseapp.com",
    databaseURL: "https://colee-cdcdc-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "colee-cdcdc",
    storageBucket: "colee-cdcdc.appspot.com",
    messagingSenderId: "763984207954",
    appId: "1:763984207954:ios:5ad72dbe44b5cd69a37f8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);


if (Platform.OS === 'web'){
  // Initialize Auth without custom persistence
  auth = getAuth(app); // Just use this
}else{
// Initialize Auth without custom persistence
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}


export { database, auth };






