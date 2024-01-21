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
            <NavLink to="/properties" className='Nav-link'>view properties</NavLink>
            
            <NavLink to="/propertylisting" className='Nav-link'>List your property</NavLink>
            <NavLink to="/about" className='Nav-link'> about </NavLink>
            <div className="login"> 
                <NavLink to="/login" className='Nav-link'>login</NavLink>
                <NavLink to="/sign-up" className='Nav-link'>sign up</NavLink>
            </div>
         
    </div>
  )
}

export default Header