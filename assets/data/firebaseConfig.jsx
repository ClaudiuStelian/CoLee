const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

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

export { database };
