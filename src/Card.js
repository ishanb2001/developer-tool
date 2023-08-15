import React from 'react';
import backgroundImage from './woman-happy.png';

const TextNearTop = () => {
    return (
        <div style={{ 
            
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',  
            borderRadius: 30, 
            backgroundColor: 'white', 
            textAlign: 'left'
        }}>
            <div className="two-sections" style={{display:'flex', alignItems: 'center', justifyContent:'space-between', justifyContent: 'space-around'}}>
                

                <div className="column-two" style={{ display: 'flex'}}>
                    {<img src={backgroundImage} style={{width:'80%'}} alt="Background"/>}
                </div>

                <div className="column-one">
                    <h1 className="header" style={{paddingBottom: 20, fontWeight:'900', fontSize: '15px', color:'#635bff' }}  >BENIFITS</h1>
                    <h1 className="header" style={{fontWeight:'900', fontSize: '32px'}}  >The currently involved users who are creating the application.</h1>
                    <p style={{ color:'#425466', fontWeight: 600, marginTop:30, marginBottom: 30, fontSize:15, lineHeight: 1.5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="button-big">Button 2</button>
                </div>
            </div>
        </div>
    );
}

export default TextNearTop;