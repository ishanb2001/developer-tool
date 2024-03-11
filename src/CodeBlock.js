
import React, { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-markup.min.js';

import 'prismjs/themes/prism-okaidia.css'; 


const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const className = `language-${language}`;

  return (
    <>
      <style>
        {`
          pre.rounded {
            background-color: #0a0a0a; /* Solid black background */
            border: 1px solid hsl(0deg 0% 100% / 14%); /* 1px grey border */
            color: #f8f8f2; /* Light grey text color for readability */
            overflow: auto; /* Allow scrolling if necessary */
            white-space: pre-wrap; /* Wrap the text inside the container */
            word-break: break-word; /* Break long words */
            font-size: 13px; /* Set a default font-size */
            max-height: 100%; /* Set a maximum height */
            border-radius: 20px;
            
          }
          /* Custom Prism.js colors (you may configure these as you wish) */
          .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
            color: hsl(0, 0%, 70%);
          }
          .token.comment, .token.prolog, .token.doctype, .token.cdata {
            color: slategray;
          }
          /* More custom styles can be added here */
        `}
      </style>
      <pre className="rounded">
        <code className={className}>
          {code}
        </code>
      </pre>
    </>
  );
};

export default CodeBlock;
