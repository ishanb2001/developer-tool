import React, { useState, useEffect } from 'react';
import './App.css';  
import VideoComponent from './VideoComponent';

function Cards({ index = 0, bgColor, borderStyle, textColor, fontSize, backgroundImage, children, videoUrl }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    let backgroundStyle = {};
    if (videoUrl) {
        backgroundStyle = {
            background: 'transparent', 
        };
    } else if (backgroundImage) {
        backgroundStyle = {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }

    const cardStyle = {
        position: 'relative',
        padding: 30,
        borderRadius: 20,
        width: '100%',
        backgroundColor: bgColor,
        color: textColor,
        fontSize: fontSize,
        border: borderStyle,
        ...backgroundStyle,
        animationDelay: `${index * 0.5}s`,
        margin: 10
    };

    return (
        <div 
            style={cardStyle} 
            className={`card ${isLoaded ? 'fade-in' : ''}`} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            {videoUrl && <VideoComponent videoUrl={videoUrl} />}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}



export default Cards;
