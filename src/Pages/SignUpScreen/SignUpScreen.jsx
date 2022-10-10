import React from 'react';
import './SignUpScreen.css'
const SignUpScreen = () => {
    return (
        <div className='signupScreen'>
           <h1>Sign In</h1>
           <form>
            <input type="email" name="" placeholder="Email or phone number" />
            <input type="password" name="" placeholder="Password" />
            <input className='signupScreen_btn' type="submit" value="Sign In" />
           </form>
        </div>
    );
};

export default SignUpScreen;