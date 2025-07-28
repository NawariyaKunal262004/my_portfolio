// Firebase config for your project
// Replace the placeholder values below with your real Firebase config from the Firebase Console

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHahmexceRqMW8DmEi_aj1ZMaZuNqaZU0",
  authDomain: "myportfolio-b8eb4.firebaseapp.com",
  projectId: "myportfolio-b8eb4",
  storageBucket: "myportfolio-b8eb4.firebasestorage.app",
  messagingSenderId: "211282162680",
  appId: "1:211282162680:web:4782a8466b7cd378aadc0d",
  measurementId: "G-Q5KGLD7PZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// To use: import { db } from './firebaseConfig';
// Replace the firebaseConfig object above with your real config from Firebase Console. 