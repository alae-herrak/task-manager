import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCoxGR9jUekaHbMU2tuzpb_KWff1uIzi1k",
  authDomain: "tast-manager-alae.firebaseapp.com",
  projectId: "tast-manager-alae",
  storageBucket: "tast-manager-alae.appspot.com",
  messagingSenderId: "115098656271",
  appId: "1:115098656271:web:67f08905dd8f7c47d44d7a",
  measurementId: "G-8Z15W0VQKT",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
