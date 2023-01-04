import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyAgrgdw_HancSiZAxgzvlsAHZYvKQ5CUPE",
    authDomain: "mucahitbilgilicv.firebaseapp.com",
    projectId: "mucahitbilgilicv",
    storageBucket: "mucahitbilgilicv.appspot.com",
    messagingSenderId: "1094714482640",
    appId: "1:1094714482640:web:ca6b0a20a55e755eb923d5",
    measurementId: "G-ER1EHWH6RL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

