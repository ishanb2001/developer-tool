import React, { useState, useRef, useEffect } from 'react';
import CodeBlock from './CodeBlock';

const LivePreviewBlock = ({ htmlCode, cssCode }) => {
  const iframeRef = useRef(null);
  const [showCode, setShowCode] = useState(false);

  const LabelStyle = {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginBottom: '10px', 
    fontSize: '15px',
    fontWeight: 600,
    
    backgroundColor: 'black',
    color: 'white',
  };

  const toggleCodeVisibility = () => setShowCode(!showCode);

  const fullHtml = `
    <html>
      <head>
        <style>
          ${cssCode}
          @media (max-width: 600px) {
            /* Example media query for responsive adjustments */
            body {
              font-size: 14px;
            }
          }
        </style>
      </head>
      <body style="margin: 0;">
        ${htmlCode}
      </body>
    </html>
  `;

  // Function to adjust iframe height
  const adjustIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe.contentWindow.document.body) {
      // Adjust height based on the scrollHeight of the iframe's body
      const height = iframe.contentWindow.document.body.scrollHeight;
      iframe.style.height = `${height}px`;
    }
  };

  // Effect to add and remove the resize event listener
  useEffect(() => {
    const handleResize = () => {
      adjustIframeHeight();
    };

    // Adjust height on initial load
    adjustIframeHeight();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <iframe
          ref={iframeRef}
          srcDoc={fullHtml}
          title="Preview"
          onLoad={adjustIframeHeight}
          style={{ width: '100%', border: '1px solid rgb(41, 41, 41)', borderRadius: '20px', backgroundColor:'#0f0f0f' }}
        />
      </div>
      <button style={LabelStyle} onClick={toggleCodeVisibility}>
        {showCode ? 'Hide code' : 'Show code'}
      </button>
      {showCode && (
        <>
          <CodeBlock code={htmlCode} language="html" />
          <CodeBlock code={cssCode} language="css" />
        </>
      )}
    </div>
  );
};

export default LivePreviewBlock;
