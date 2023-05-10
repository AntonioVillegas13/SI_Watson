// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {initializeFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import { doc, setDoc,addDoc,collection ,getDoc} from "firebase/firestore"; 
import { Alert } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyC3HRPxLob4KSOTSY1QhVmnO9enti9f0Kk",
    authDomain: "seguridadinformatica-59a75.firebaseapp.com",
    projectId: "seguridadinformatica-59a75",
    storageBucket: "seguridadinformatica-59a75.appspot.com",
    messagingSenderId: "742704820196",
    appId: "1:742704820196:web:123da6926b7c5c630e21f1",
    measurementId: "G-0JE71P36XV"
  
};
export const loadConfiguration=()=>{
   // Alert.alert("carga la configuracio!!!");
    const app = initializeApp(firebaseConfig);
    const db =initializeFirestore(app,{
        experimentalForceLongPolling: true,
    });
    initializeApp(firebaseConfig);
    global.dbCon=db;
    global.storage = getStorage(app);

}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

