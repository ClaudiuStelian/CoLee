// retrieveData.js
import { ref, get } from 'firebase/database';
import { database } from './firebaseConfig'; // Adjust the path to where your firebaseConfig.js is located

async function fetchData() {
    try {
        // Reference to the specific part of your database you want to read
        const dataRef = ref(database, 'your-data-path'); // Change 'your-data-path' to your actual path

        // Get the data
        const snapshot = await get(dataRef);

        if (snapshot.exists()) {
            console.log('Data retrieved:', snapshot.val());
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

