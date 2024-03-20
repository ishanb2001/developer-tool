import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo-ishan.png';
import Styling from "./Styling";



const SideNavBar = () => {
  return (
    <nav className="side-navbar">
      <p style={{
              position: 'sticky',
              top: '0px', 
              backgroundColor: 'black',
            
              
              zIndex: 100, 
            }}>
              
            </p>
      <ul>
        
        <li><NavLink to="/intro" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/styling" className={({ isActive }) => isActive ? "active-link" : ""}>Cards</NavLink></li>

        <li><NavLink to="/navigationsnippet" className={({ isActive }) => isActive ? "active-link" : ""}>Navigation</NavLink></li>
        <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>Importing Fonts</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>How To Send</NavLink></li>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/signin" className={({ isActive }) => isActive ? "active-link" : ""}>Navigation</NavLink></li>
        <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>Sign Up</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>Cart</NavLink></li>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li className="sidebar-subheader">Documentation</li>
        <li><NavLink to="/Intro" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/Styling" className={({ isActive }) => isActive ? "active-link" : ""}>Styling</NavLink></li>

        <li><NavLink to="/signin" className={({ isActive }) => isActive ? "active-link" : ""}>Navigation</NavLink></li>
        <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>Sign Up</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>Cart</NavLink></li>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        
        
        
      </ul>
    </nav>
  );
};

export default SideNavBar;
