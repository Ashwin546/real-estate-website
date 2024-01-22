import React from 'react'
import {NavLink, Route} from 'react-router-dom';
import './header.css'
function Header() {
  return (
    <div className='Header'>
    
          <div className='logo'>RentHuB</div>
          <NavLink to="/" className='Nav-link'>
                home
            </NavLink>
            
            
            <NavLink to="/propertylisting" className='Nav-link'>post your property</NavLink>
            <NavLink to="/about" className='Nav-link'> about </NavLink>
            <NavLink to="/contact" className='Nav-link'>contact</NavLink>
            <div className="login"> 
                <NavLink to="/login" className='Nav-link'>login</NavLink>
                <NavLink to="/sign-up" className='Nav-link'>sign up</NavLink>
            </div>
         
    </div>
  )
}

export default Header