import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwiVv_7cGImuH5r_j2gXWNw7843xwPcds",
  authDomain: "yansons-app.firebaseapp.com",
  projectId: "yansons-app",
  storageBucket: "yansons-app.appspot.com",
  messagingSenderId: "445936325716",
  appId: "1:445936325716:web:0615ad7c7e1fbe5aff09c1",
  measurementId: "G-89G8XD1RZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db }; 