// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
const auth = getAuth(app);
export const storage = getStorage(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');
export const ordersCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
export const uploadProductPhoto = async (file) => {

  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;
};