const { initializeApp } = require('firebase/app');
const { getDatabase, ref, update } = require('firebase/database');

// Firebase configuration object from your Firebase project
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
const database = getDatabase(app);

// The data you want to patch into the database (specific updates)
const data = {
  "Adds": [
    "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v57_297.png?alt=media&token=2f51fd39-1d0c-4932-9e35-0e0f65c2a2c2",
    "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
    "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v57_297.png?alt=media&token=2f51fd39-1d0c-4932-9e35-0e0f65c2a2c2"
  ],
  "CSBc/0/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/0/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/0/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/0/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/1/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/1/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/1/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/1/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/2/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/2/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/2/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/2/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/3/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/3/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/3/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/3/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/4/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/4/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/4/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/4/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/5/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/5/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/5/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/5/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/6/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/6/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/6/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/6/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  
  "CSBc/7/tutorials/positions/1/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/7/tutorials/positions/2/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/7/tutorials/positions/3/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
  "CSBc/7/tutorials/positions/4/linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
};

// Reference to the root of the database
const dbRef = ref(database);

// Patch the data in the database
update(dbRef, data)
  .then(() => {
    console.log('Data successfully updated in the database!');
  })
  .catch((error) => {
    console.error('Error updating data in the database:', error);
  });
