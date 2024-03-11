
import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

const LivePreviewBlock = ({ htmlCode, cssCode }) => {
  const [showCode, setShowCode] = useState(false);

  const toggleCodeVisibility = () => setShowCode(!showCode);
  

  const fullHtml = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body style="margin: 0;">
        ${htmlCode}
      </body>
    </html>
  `;

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <iframe 
          srcDoc={fullHtml} 
          title="Preview" 
          style={{ width: '100%', height: '200px', border: 'none' }}
        />
      </div>
      <button className="modern-button"  onClick={toggleCodeVisibility}>
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
