import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';
import TrendingCourses from './TrendingCourses';
import CourseImage from './CourseImage';
import Footer from './Footer';
import Pros from './Pros';
import CardComponent from './CardComponent';
import CoursePage from './CoursePage';
import TextNearTop from './Card';
import FadeInWrapper from './FadeInWrapper';
import CourseLanding from './CourseLanding';
import Teacher from './teacher.png';
import SignIn from './SignIn';
import SignUpPage from './SignUpPage';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import SideNavBar from './SideNavBar';
import Cards from './Cards';
import Label from './Label';
import backgroundImage from './woman-smiling.png';
import Styling from "./Styling";
import Intro from "./Intro";


function Section({ children }) {
  return (
    <div className="section">
      {children}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        
        <div className="App">
      
          
          <div className="left-sidebar">
            {/* Your sidebar content */}
            <FadeInWrapper>
              <Section>
                
                <SideNavBar />
              </Section>
            </FadeInWrapper>
          </div>
          <div className="main-content">
          <div style={{position: 'sticky',top: '0px', fontSize: '60px', zIndex: 100}}>
  <div className="navbar-content-wrapper">
    <div>hi</div>
    <div>hi</div>
    </div>
</div>

            {/* Your main content */}
            <Routes>
  <Route path="/" />
  <Route path="/Intro" element={<Intro />} />
  <Route path="/Styling" element={<Styling />} />
  {/* other routes */}
</Routes>
                <React.Fragment>
      {/* Example main content */}
      
      {/* Repeat for additional content as needed */}
    </React.Fragment>
            



          </div>
          
        </div>
      </Router>
    </CartProvider>
  );
}


export default App;
