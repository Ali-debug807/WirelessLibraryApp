import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD82txNFGWsnF8XkxHx8QjqMXKDRLycb0A",
    authDomain: "libraryapp-91422.firebaseapp.com",
    databaseURL: "https://libraryapp-91422-default-rtdb.firebaseio.com",
    projectId: "libraryapp-91422",
    storageBucket: "libraryapp-91422.appspot.com",
    messagingSenderId: "990711617779",
    appId: "1:990711617779:web:04d2502e128e89631eff86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore() 