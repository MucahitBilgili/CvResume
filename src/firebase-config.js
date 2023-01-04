import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyBwiAgEWf7QHjkaehmmjQ8v21GxtwQPgsg",
    authDomain: "resume-react-mb.firebaseapp.com",
    projectId: "resume-react-mb",
    storageBucket: "resume-react-mb.appspot.com",
    messagingSenderId: "231355085527",
    appId: "1:231355085527:web:69c542c00e3a2680efb692",
    measurementId: "G-5JGYZP94ZQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

