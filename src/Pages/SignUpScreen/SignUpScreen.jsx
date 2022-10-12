import React, { useRef } from "react";
import { auth } from "../../../firebase";
import {  createUserWithEmailAndPassword ,  signInWithEmailAndPassword} from "firebase/auth";
import "./SignUpScreen.css";


const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register=(e)=>  {
 e.preventDefault()
    createUserWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value
    ).then((userCredential) => {
         console.log(userCredential)
      }).catch((error) => {
       console.log(error.message)
      });

    }
    
  
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, emailRef.current.value,
      passwordRef.current.value)
  .then((userCredential) => {
    console.log(userCredential)
    })
  .catch((error) => {
   
   alert(error.message) ;
  });

  };
  return (
    <div className="signupScreen">
      <h1>Sign In</h1>
      <form>
        <input
          ref={emailRef}
          type="email"
          name=""
          placeholder="Email or phone number"
        />
        <input
          ref={passwordRef}
          type="password"
          name=""
          placeholder="Password"
        />
        <input
         onClick={signIn}
          className="signupScreen_btn"
          type="submit"
          value="Sign In"
        />
        <p>
          <span className="new_netflix">New to netflix? </span>
          <span className="sign_up_link" onClick={register}>
            Sign up now
          </span>
        </p>
      </form>
    </div>
  );
  }

export default SignUpScreen;
