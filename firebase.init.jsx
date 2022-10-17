import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";


const firebaseConfig = {
 apiKey: "AIzaSyA66qpV02Fu8w5Dy87sCXMaOrl6Asx08lg",
  authDomain: "netflix-clone-5d5b9.firebaseapp.com",
  projectId: "netflix-clone-5d5b9",
  storageBucket: "netflix-clone-5d5b9.appspot.com",
  messagingSenderId: "315005470557",
  appId: "1:315005470557:web:bbe94b820dbe0795abcab4"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

