import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../../Components/nav/Nav';
import { selectUser } from '../../features/userSlice';
import './ProfileScreen.css'
import {  signOut } from "firebase/auth";
import { auth } from '../../../firebase';
function ProfileScreen(props) {
    
    const user=useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav/>
          <div className="profileScreen_body">
            <h1>Edit profile</h1>
           <div className="profileScreen_info">
          
                <img className='profileScreen_avatar' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jo_Kay_-_Those_Green_Eyes_%281431777290%29.jpg/300px-Jo_Kay_-_Those_Green_Eyes_%281431777290%29.jpg" alt="" />
           
            <div className="profileScreen_details">
                <h3>{user?.email}</h3>
                <button onClick={()=>signOut(auth)} className="profileScreen_sign0ut">Sign out</button>
            </div>
           </div>
          </div>
        </div>
    );
}

export default ProfileScreen;