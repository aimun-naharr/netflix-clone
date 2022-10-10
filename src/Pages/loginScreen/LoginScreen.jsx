import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "../../assets/logo.png";
import SignUpScreen from "../SignUpScreen/SignUpScreen";
const LoginScreen = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="lScreen">
      <div className="loginScreen_bg">
        <img className="nav_logo" src={logo} alt="" />
        <button className="login_button" onClick={() => setSignUp(true)}>
          Sign in
        </button>
        <div className="loginScreen_gradient">
          <div className="loginScreen_headings">
            {signUp ? (
              <SignUpScreen />
            ) : (
              <>
                <h1>Unlimited Movies, Tv shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h4>
                  Ready to watch? Enter you email to create or restart your
                  membership
                </h4>
                <form>
                  <input
                    className="loginScreen_input"
                    type="email"
                    placeholder="Enter your email"
                    id=""
                  />
                  <button
                    onClick={() => setSignUp(true)}
                    className="GetStarted_button"
                  >
                    Get Started
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
