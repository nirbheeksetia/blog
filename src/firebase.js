import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_Auth_DOMAIN,
    databaseURL:  process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  });
  
  export default firebaseConfig;
  export const auth = firebaseConfig.auth(); 