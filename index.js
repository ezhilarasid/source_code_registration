import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm_BC0iexOrpPTl202L2RK_6866flFW0E",
  authDomain: "react-firebase-auth-bae8e.firebaseapp.com",
  projectId: "react-firebase-auth-bae8e",
  storageBucket: "react-firebase-auth-bae8e.appspot.com",
  messagingSenderId: "99565921278",
  appId: "1:99565921278:web:17d3a3ef57d2cc8f9d96af",
  measurementId: "G-3HCFZEYPV0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);