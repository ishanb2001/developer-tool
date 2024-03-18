import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo-ishan.png';
import Cards from './Cards';
import Label from './Label';
import Navbar from './Navbar';
import backgroundImage from './woman-smiling.png'

const Intro = () => {
  return (
    <div className='course-page-content'>
        
        
        <div class="cards-home" style={{display: 'flex', alignItems: 'center'}}>
        
                <Cards index={0}
                
                    borderStyle='1px solid black'
                    bgColor="transparent" 
                    textColor="white" 
                    fontSize="15px"
>
                    <Label buttonBgColor="#262626" buttonText="EXPLORE NOW"/>
                
                    <div style={{display: 'flex'}}>
  <div>
  <h1 class="banner-text" style={{flexGrow: 1}}>From selecting furniture pieces to curating accessories — we assist you in finding the perfect elements to complement.</h1>
  <p className="body-copy">Hear USHER and all your other favourites in Spatial Audio with Dolby Atmos.1 And unlock amazing tonal definition with lossless audio.

</p>
    </div>
  <h1 style={{flexGrow: 2, color: '#c1ff6c'}}> &lt;/&gt;</h1>
</div>

                </Cards>
                
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>

                
            <Cards index={0}
                
                borderStyle='1px solid black'
                bgColor="#C1FF6C" 
                textColor="black" 
                fontSize="15px"
>

<div style={{marginBottom: '60px'}}>
                <Label buttonBgColor="black" buttonText="EXPLORE NOW"/>
            </div>
                
                <h1 style={{fontSize: 30, fontWeight: 600}}>Creative power that goes beyond templates</h1>
            </Cards>
            
            
            <Cards index={0}
                
                borderStyle='1px solid rgb(46, 46, 46)'
                bgColor="black" 
                textColor="white" 
                fontSize="15px"
>               <div style={{marginBottom: '60px'}}>
                <Label buttonBgColor="purple" buttonText="EXPLORE NOW"/>
                </div>
                
                <h1 style={{fontSize: 30, fontWeight: 600}}>Creative power that goes beyond templates</h1>
            </Cards>

            
            </div>
      </div>
  );
};

export default Intro;
