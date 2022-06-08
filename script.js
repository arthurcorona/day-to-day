// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjgUEn24Luyx2y_kFEH1QwnWKoNyEOFmI",
    authDomain: "diabetes-c30af.firebaseapp.com",
    projectId: "diabetes-c30af",
    storageBucket: "diabetes-c30af.appspot.com",
    messagingSenderId: "546363987043",
    appId: "1:546363987043:web:bad1ae1848b37ddfb65456",
    measurementId: "G-ZKCP3XVJ8K"
  };
  
  firebase.initializeApp(firebaseConfig)
  let database = firebase.firestore()

database.collection("")