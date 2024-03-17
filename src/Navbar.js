import React from 'react';

const Navbar = () => {
  
  const ConnectorSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="56" viewBox="0 0 70 56" fill="none">
      <path d="M0 0V0C9.36189 0 18.1192 4.67883 23.3123 12.4684L28.3436 20.0154C31.5102 24.7653 38.4898 24.7653 41.6564 20.0154L46.6877 12.4684C51.8808 4.67882 60.6381 0 70 0V0V56V56C60.6381 56 51.8808 51.3212 46.6877 43.5316L41.6564 35.9846C38.4898 31.2347 31.5102 31.2347 28.3436 35.9846L23.3123 43.5316C18.1192 51.3212 9.36189 56 0 56V56V0Z" fill="white"/>
    </svg>
  );

  return (
    <div className="navbar">
        
<button className="nav-button">Services</button>
      
      <button className="nav-button-2">Knowledge Center</button>
      
      <button className="nav-button-3">Portfolio</button>

      
    </div>
  );
};

export default Navbar;
