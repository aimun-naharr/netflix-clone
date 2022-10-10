import React from 'react';
import './LoginScreen.css'
import logo from '../../assets/logo.png'
const LoginScreen = () => {
    return (
        <div className='lScreen'>
          <div className="loginScreen_bg">
          <img className='nav_logo' src={logo} alt="" />
            <button className='login_button'>Sign in</button>
            <div className="loginScreen_gradient">
           <div className='loginScreen_headings'>
           <h1>Unlimited Movies, Tv shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h3>Ready to watch? Enter you email to create or restart your membership</h3>
           </div>
            </div>
            
          </div>
        
            
        </div>
    );
};

export default LoginScreen;