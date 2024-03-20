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
import Navbar from './Navbar';
import Cards from './Cards';
import Label from './Label';
import backgroundImage from './woman-smiling.png';
import Styling from "./Styling";
import Intro from "./Intro";
import NavigationSnippet from "./NavigationSnippet";


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
      <Home/>
        <div className="App">
        
      
          
          <div className="left-sidebar">
            
            <FadeInWrapper>
              <Section>
                
                <SideNavBar />
              </Section>
            </FadeInWrapper>
          </div>
          
          <div className="main-content">
          

            
            <Routes>
  <Route path="/" />
  <Route path="/Intro" element={<Intro />} />
  <Route path="/Styling" element={<Styling />} />
  <Route path="/NavigationSnippet" element={<NavigationSnippet />} />
  {/* other routes */}
</Routes>
                <React.Fragment>
      
    </React.Fragment>
            


    
          </div>
          
          
        </div>
      </Router>
    </CartProvider>
  );
}


export default App;
