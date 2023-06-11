// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ67LeJNWNgcMWB2NpEdLYPWch_zWJK8k",
  authDomain: "facebook-clone-1e97f.firebaseapp.com",
  projectId: "facebook-clone-1e97f",
  storageBucket: "facebook-clone-1e97f.appspot.com",
  messagingSenderId: "1050148039847",
  appId: "1:1050148039847:web:589f866b341340c3f4bf82",
  measurementId: "G-DEC4X0NET4",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
