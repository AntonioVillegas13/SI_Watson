// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { doc, setDoc, addDoc, collection, getDoc } from "firebase/firestore";
import { Alert } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyBTcOeR7Hx3019JCU6ghAaphYltQ97oRI4",
  authDomain: "seguridadinformatica2-e8127.firebaseapp.com",
  projectId: "seguridadinformatica2-e8127",
  storageBucket: "seguridadinformatica2-e8127.appspot.com",
  messagingSenderId: "49254598806",
  appId: "1:49254598806:web:27a3f4b9744a402ed29ab7"
};
export const loadConfiguration = () => {
  // Alert.alert("carga la configuracio!!!");
  const app = initializeApp(firebaseConfig);
  const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
  initializeApp(firebaseConfig);
  global.dbCon = db;
  global.storage = getStorage(app);
};
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
