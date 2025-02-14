import React from 'react';
import Body from './components/Body.js';
import Navbar from './components/Navbar.js';
import SocialMediaIcons from './components/Links.js';
import SkewedBackground from './components/skewedBackground.js';
import ResumeButton from './components/Resumebutton.js';

const App =()=> {
     return (
      <div>
<SkewedBackground>
         <SocialMediaIcons/>
          <Body />
          <Navbar />
          
          </SkewedBackground>
         
     
        </div>
    );
  };





export default App;