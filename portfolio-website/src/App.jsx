import githubLogo from './assets/github-mark-white.svg'
import linkedInLogo from './assets/linkedin-svgrepo-com.svg'
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
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="name-title">Jack Morin</h1>
          <p className="subtitle">Full Stack Developer &amp; Software Engineer</p>
          <div className="social-links">
            <a href="https://github.com/JackMorin25" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} className="logo" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/jack-morin-13a83b294" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} className="logo" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about-section">
          <h2>About Me</h2>
          <FadeText>
            <p>
              Hi, I'm Jack Morin, a passionate Full Stack Developer with experience building modern web applications using React, Node.js, and more. I enjoy solving complex problems and creating seamless user experiences.
            </p>
          </FadeText>
        </section>

        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>Project One</h3>
              <p>
                A web application that allows users to track their tasks efficiently. Built with React, Node.js, and MongoDB.
              </p>
              <a href="https://github.com/JackMorin25/project-one" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>
                Real-time chat application using WebSockets and Express. Features authentication and responsive design.
              </p>
              <a href="https://github.com/JackMorin25/project-two" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Project Three</h3>
              <p>
                Portfolio website showcasing my work, skills, and contact information. Built with React and CSS animations.
              </p>
              <a href="https://github.com/JackMorin25/portfolio-website" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript / TypeScript</li>
            <li>React / Redux</li>
            <li>Node.js / Express</li>
            <li>HTML5 / CSS3 / SASS</li>
            <li>MongoDB / SQL</li>
            <li>Git / GitHub</li>
            <li>REST APIs</li>
            <li>Unit Testing / Jest</li>
          </ul>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <p>
            Interested in working together or have any questions? Feel free to reach out!
          </p>
          <a href="mailto:jack.morin@email.com" className="contact-button">Email Me</a>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
