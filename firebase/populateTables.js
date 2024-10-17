const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

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

// The data you want to insert into the database
const data = {
  "Adds": [
    {"addposter":"https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=979c19c6-6c2d-43c8-8ee0-aa5e7d197393","addLink":"https://www.google.com"},
    {"addposter":"https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=979c19c6-6c2d-43c8-8ee0-aa5e7d197393","addLink":"https://www.google.com"},
    {"addposter":"https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=979c19c6-6c2d-43c8-8ee0-aa5e7d197393","addLink":"https://www.google.com"}
  ],
  "CSBc": [
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
    {
      "title": "Dust 22",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_543.png?alt=media&token=ca094b29-286e-4278-909f-f383b10b6fa1",
      "map": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorials": {
        "counter-terrorist":{   
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotovct":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        },
        "terrorist":{        
          "smoke":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "grenade":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "flashbang":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
          "molotov":{     
            "positions": {
              "1": { 
                "position": ["10%", "20%"], 
                "destinations":[
                  {"destination":["20%", "14%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["55%", "45%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["70%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              
              "2": { "position": ["30%", "10%"], 
                "destinations":[
                  {"destination":["10%", "55%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "13%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["44%", "70%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "3": { "position": ["40%", "10%"], 
                "destinations":[
                  {"destination":["54%", "23%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["22%", "33%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["53%", "57%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["20%", "4%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
              "4": { "position": ["60%", "30%"], 
                "destinations":[
                  {"destination":["33%", "22%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                  {"destination":["33%", "85%"], "linkVideo": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e" },
                ],
              },
            }
          },
        }
      },
      "details": null
    },
  ],
  "Rustb": [
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
    {
      "title": "Dust 2",
      "titleMap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_31.png?alt=media&token=f18deb71-9340-4f25-9a0c-c8529258dbf1",
      "rustmap": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v58_601.png?alt=media&token=82bd989d-5c1c-4969-889c-ec01432b9eff",
      "tutorial": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/Sequence%2001.mp4?alt=media&token=42f14cff-a0f9-42d8-9d20-3a0534eaed2e",
      "requiredItems": [
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" },
        { "name": "2 Electric Fuses", "picture": "https://firebasestorage.googleapis.com/v0/b/colee-cdcdc.appspot.com/o/v64_149.png?alt=media&token=1852672c-212d-4116-88a8-f244c3dea22f" }
      ],
      "legends": [
        { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "red"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "blue"
         },
         { "legend": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "dotColour": "orange"
         },
      ],
      "details": "Items Required"
    },
  ]
}

// Reference to the root of the database
const dbRef = ref(database);

// Set the data at the root of the database
set(dbRef, data)
  .then(() => {
    console.log('Data successfully written to the database!');
  })
  .catch((error) => {
    console.error('Error writing data to the database:', error);
  });
