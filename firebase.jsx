import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  projectId: process.env.REACT_PROJECTID,
  storageBucket: process.env.REACT_STORAGE,
  messagingSenderId: process.env.REACT_MESSAGE,
  appId: process.env.REACT_APPID
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

