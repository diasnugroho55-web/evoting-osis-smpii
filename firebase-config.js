import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7h0_o6tKaTeGiWswlqiPtDUabd-kMN_c",
  authDomain: "evoting-osis-b65d7.firebaseapp.com",
  projectId: "evoting-osis-b65d7",
  storageBucket: "evoting-osis-b65d7.firebasestorage.app",
  messagingSenderId: "840941931492",
  appId: "1:840941931492:web:566fa5c1054909740cd5f1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);