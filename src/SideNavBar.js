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
              borderBottom: '1px solid hsla( 0,0%,18% ,1)',
              
              zIndex: 100, 
            }}>
              <img src={Logo} style={{width: '100%', height: 'auto', marginBottom: 10, marginTop: 10}} />
            </p>
      <ul>
        
        <li><NavLink to="/Intro" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/Styling" className={({ isActive }) => isActive ? "active-link" : ""}>Cards</NavLink></li>

        <li><NavLink to="/NavigationSnippet" className={({ isActive }) => isActive ? "active-link" : ""}>Navigation</NavLink></li>
        <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>Sign Up</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>Cart</NavLink></li>
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
