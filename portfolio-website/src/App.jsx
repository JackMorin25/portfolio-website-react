import githubLogo from './assets/github-mark-white.svg'
import linkedInLogo from './assets/linkedin-svgrepo-com.svg'
import downArrow from './assets/down-arrow-svgrepo-com.svg'
import PixelRain from './components/pixel-rain/PixelRain'
import FadeText from './components/fade-text/fadeText'
import './App.css'

import React, { useEffect } from "react";
//import { useInView } from 'react-intersection-observer';

function App() {

  useEffect(() => {
    window.addEventListener('scroll', function() {
        // Code to execute on scroll
        if(this.window.scrollY > 0){
            // hide scroll down icon
            document.querySelector('.downArrow').style.display = 'none';
        }
        else{
            document.querySelector('.downArrow').style.display = 'block';
        }
    });
  })

  return (
    <>
      <PixelRain />
      <h1>Jack Morin's Portfolio</h1>
      <div style={{marginTop: '15%'}}>
        <a href="https://github.com/JackMorin25" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/jack-morin-13a83b294" target="_blank">
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
      </div>
      <FadeText />
      <div>
        <a>
          <img src={downArrow} className="downArrow" alt="Scroll Down" />
        </a>
      </div>
      
      <div id="more-content" style={{marginBottom: '20px',transform: 'translate(0px,500px)'}}>
        <p style={{ width: '50%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid modi ab sed nostrum optio repudiandae. Dolorem inventore asperiores nihil doloribus, quasi odio officia aspernatur consectetur delectus laborum at sunt veniam?</p>
      </div>
      <div id="more-content" style={{marginBottom: '20px', transform: 'translate(600px,700px)'}}>
        <p style={{ width: '50%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid modi ab sed nostrum optio repudiandae. Dolorem inventore asperiores nihil doloribus, quasi odio officia aspernatur consectetur delectus laborum at sunt veniam?</p>
      </div>
      <div id="more-content" style={{marginBottom: '20px',transform: 'translate(0px,900px)'}}>
        <p style={{ width: '50%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid modi ab sed nostrum optio repudiandae. Dolorem inventore asperiores nihil doloribus, quasi odio officia aspernatur consectetur delectus laborum at sunt veniam?</p>
      </div>
    </>
  )
}

export default App
