// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQ6fDATO7-58bZihX4md2DMlUExS35v9Q",
    authDomain: "ai-mock-interview-5b657.firebaseapp.com",
    projectId: "ai-mock-interview-5b657",
    storageBucket: "ai-mock-interview-5b657.firebasestorage.app",
    messagingSenderId: "145984260181",
    appId: "1:145984260181:web:fb4f5231893482ccccacdc",
    measurementId: "G-H9B1RBDZG4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);