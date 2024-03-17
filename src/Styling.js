import React from 'react';
import LivePreviewBlock from './LivePreviewBlock';

const Styling = () => {
  const htmlCodeSnippet = `<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="transparent">
  <tr>
      <td align="center" style="padding: 10px;">
          <!-- Wrapper table for content -->
          <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="white" style="max-width: 600px; background-color: black;">
              <tr>
                  <!-- Card 1 Container -->
                  <td class="card-container" valign="top" style="padding: 10px; background-color: white;">
                      <img src="https://www.macworld.com/wp-content/uploads/2024/01/apple-event-info-hero-2.jpg?quality=50&strip=all" width="220" alt="description" style="width: 100%; max-width: 220px; height: auto;">
                      <h2 style="font-size: 16px; font-family: Arial, sans-serif; margin: 10px 0;">Card Title 1</h2>
                      <p style="font-family: Arial, sans-serif;">Description for the first card. This is a brief overview of what the card is about.</p>
                  </td>
                  <!-- Fixed-width Spacer -->
                  <td class="spacer" width="10" style="width:5px; background-color: white;">&nbsp;</td>
                  <!-- Card 2 Container -->
                  <td class="card-container" valign="top" style="padding: 10px; background-color: white;">
                      <img src="https://www.macworld.com/wp-content/uploads/2024/01/apple-event-info-hero-2.jpg?quality=50&strip=all" width="220" alt="description" style="width: 100%; max-width: 220px; height: auto;">
                      <h2 style="font-size: 16px; font-family: Arial, sans-serif; margin: 10px 0;">Card Title 2</h2>
                      <p style="font-family: Arial, sans-serif;">Description for the second card. More details about what this card represents.</p>
                  </td>
                  <!-- Fixed-width Spacer -->
                  <td class="spacer" width="10" style="width:5px; background-color: white;">&nbsp;</td>
                  <!-- Card 3 Container -->
                  <td class="card-container" valign="top" style="padding: 10px; background-color: white;">
                      <img src="https://www.macworld.com/wp-content/uploads/2024/01/apple-event-info-hero-2.jpg?quality=50&strip=all" width="220" alt="description" style="width: 100%; max-width: 220px; height: auto;">
                      <h2 style="font-size: 16px; font-family: Arial, sans-serif; margin: 10px 0;">Card Title 3</h2>
                      <p style="font-family: Arial, sans-serif;">Description for the third card. Insight into the card's content and purpose.</p>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
</table>`;

  const cssCodeSnippet = `td.card-container, td.spacer {
    width: 220px; /* Specify the width for desktop */
}

/* Adjustments for mobile screens */
@media only screen and (max-width: 600px) {
    td.card-container, td.spacer {
        display: block !important; /* Stack the card containers */
        width: 100% !important; /* Use full width of the screen */
        box-sizing: border-box !important;
        padding: 10px 0 !important; /* Adjust padding for spacing between cards */
    }
    /* Remove the fixed width for the spacers on mobile to avoid unnecessary spacing */
    td.spacer {
        width: 0 !important; 
        padding: 0 !important; /* Eliminate spacer effect on mobile */
    }
}`;



const htmlCodeSnippet2 = `<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="transparent">
<tr>
    <td align="center" style="padding: 10px;">
        <!-- Wrapper table for content -->
        <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="white" style="max-width: 600px; background-color: black;">
            <tr>
                <!-- Card 1 Container -->
                <td class="card-container" valign="top" style="padding: 10px; background-color: white;">
                    <img src="https://www.macworld.com/wp-content/uploads/2024/01/apple-event-info-hero-2.jpg?quality=50&strip=all" width="220" alt="description" style="width: 100%; max-width: 280px; height: auto;">
                </td>
                <!-- Fixed-width Spacer -->
                <td class="spacer" width="10" style="width:5px; background-color: white;">&nbsp;</td>
                <!-- Card 2 Container -->
                <td class="card-container" valign="top" style="padding: 10px; background-color: white;">
                    
                    <h2 style="font-size: 16px; font-family: Arial, sans-serif; margin: 10px 0;">Card Title 2</h2>
                    <p style="font-family: Arial, sans-serif;">Description for the second card. More details about what this card represents.</p>
                </td>
                <!-- Fixed-width Spacer -->
                <td class="spacer" width="10" style="width:5px; background-color: white;">&nbsp;</td>
                <!-- Card 3 Container -->
                
            </tr>
        </table>
    </td>
</tr>
</table>`;

const cssCodeSnippet2 = `td.card-container, td.spacer {
  width: 220px; /* Specify the width for desktop */
}

/* Adjustments for mobile screens */
@media only screen and (max-width: 600px) {
  td.card-container, td.spacer {
      display: block !important; /* Stack the card containers */
      width: 100% !important; /* Use full width of the screen */
      box-sizing: border-box !important;
      padding: 10px 0 !important; /* Adjust padding for spacing between cards */
  }
  /* Remove the fixed width for the spacers on mobile to avoid unnecessary spacing */
  td.spacer {
      width: 0 !important; 
      padding: 0 !important; /* Eliminate spacer effect on mobile */
  }
}`;

  return (
    <div className='course-page-content'>
      <h1>Code Blocks</h1>
      <LivePreviewBlock htmlCode={htmlCodeSnippet} cssCode={cssCodeSnippet} />

      <LivePreviewBlock htmlCode={htmlCodeSnippet2} cssCode={cssCodeSnippet2} />
    </div>
  );
};

export default Styling;
