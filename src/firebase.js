// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABR5-OQobcXiz3WeZhVfEK58YjEV0_OFU",
  authDomain: "diploma-7fde6.firebaseapp.com",
  projectId: "diploma-7fde6",
  storageBucket: "diploma-7fde6.appspot.com",
  messagingSenderId: "917616341572",
  appId: "1:917616341572:web:72c356bb40833256290211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export const categories = collection(db.categories);