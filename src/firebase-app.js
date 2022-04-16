import admin from "firebase/compat/app";
import "firebase/auth"
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHiNgYJcRQ7b-kOgb0ik-4JfHA9V05o2U",
  authDomain: "trashlocator-49381.firebaseapp.com",
  databaseURL: "https://trashlocator-49381-default-rtdb.firebaseio.com",
  projectId: "trashlocator-49381",
  storageBucket: "trashlocator-49381.appspot.com",
  messagingSenderId: "847341724453",
  appId: "1:847341724453:web:3c99ee108b228c026db0cc",
  measurementId: "G-7LBMMZ3SL1"
};

const fireDb=admin.initializeApp(firebaseConfig);
const db=fireDb.database().ref()
export default db;