// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo',
  authDomain: 'technique-map.firebaseapp.com',
  projectId: 'technique-map',
  storageBucket: 'technique-map.appspot.com',
  messagingSenderId: '357714563975',
  appId: '1:357714563975:web:1674edff97e77706077922',
  measurementId: 'G-YC5QN1TVNC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
