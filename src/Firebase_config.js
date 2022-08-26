import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  

  
  const firebaseConfig = {
    apiKey: "AIzaSyB1WxT0F8Y8TawjaK4kkMQBZFPg3fpXiP8",
    authDomain: "firsttodoapp-250eb.firebaseapp.com",
    projectId: "firsttodoapp-250eb",
    storageBucket: "firsttodoapp-250eb.appspot.com",
    messagingSenderId: "414299534629",
    appId: "1:414299534629:web:54d91b60c6c44c4b5f16cc",
    measurementId: "G-E39QZJB2QN"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {auth, db};

export default firebase;




