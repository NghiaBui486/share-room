import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDldHUiwQ-JB2-xQnFfSIbXB6bP5osCaDU",
  authDomain: "fir-react-upload-fe8ac.firebaseapp.com",
  projectId: "fir-react-upload-fe8ac",
  storageBucket: "fir-react-upload-fe8ac.appspot.com",
  messagingSenderId: "363054113878",
  appId: "1:363054113878:web:95288fa68c20664cf547f7",
  measurementId: "G-JZ8V8T6BFE",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }