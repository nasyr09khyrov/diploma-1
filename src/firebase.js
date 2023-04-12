// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
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

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');