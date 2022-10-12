import React, { useEffect, useState } from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
const Nav = () => {
   
    const [show, setShow]=useState(false)
    const transitionNav=()=>{
if(window.scrollY>100){
    setShow(true)
}else{
    setShow(false)
}
    }
    useEffect(()=>{
        window.addEventListener('scroll', transitionNav)
        return ()=>{
            window.removeEventListener('scroll', transitionNav)
        }
    },[])
    return (
       <nav className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
            
                <img className='nav_logo' src={logo} alt="" />
            <Link to='/profile'><img className="nav_avatar" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jo_Kay_-_Those_Green_Eyes_%281431777290%29.jpg/300px-Jo_Kay_-_Those_Green_Eyes_%281431777290%29.jpg'/>
</Link>
        </div>
       </nav>
    );
};

export default Nav;