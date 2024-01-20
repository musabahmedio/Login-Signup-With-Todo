// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSLIyauKhPNkLxDLWHZvz3rPnWcPhYgPw",
  authDomain: "todo-g-cadaf.firebaseapp.com",
  databaseURL: "https://todo-g-cadaf-default-rtdb.firebaseio.com",
  projectId: "todo-g-cadaf",
  storageBucket: "todo-g-cadaf.appspot.com",
  messagingSenderId: "947445854034",
  appId: "1:947445854034:web:2fc5bdf2943ad79e69948b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
