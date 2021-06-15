import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCV52QBD4XDhDUZI1VNjoR5vVxaSi1Z2n0",
    authDomain: "blog-project-17202.firebaseapp.com",
    databaseURL: "https://blog-project-17202-default-rtdb.firebaseio.com",
    projectId: "blog-project-17202",
    storageBucket: "blog-project-17202.appspot.com",
    messagingSenderId: "195354242499",
    appId: "1:195354242499:web:0a45f5ff752f0bee1d6176",
    measurementId: "G-GR66HBJ0XG"
  };
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;