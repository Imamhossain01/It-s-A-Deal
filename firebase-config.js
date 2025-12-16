// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiGEnhmJZ5Jzdk5wyIxVniD0BVTAjwrw8",
  authDomain: "operating-b79c5.firebaseapp.com",
  projectId: "operating-b79c5",
  storageBucket: "operating-b79c5.firebasestorage.app",
  messagingSenderId: "24877746514",
  appId: "1:24877746514:web:382cd0c381ca6e0bd3928b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 