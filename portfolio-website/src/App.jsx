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
          <FadeText text={"Hi, I'm Jack Morin, a passionate Full Stack Developer with experience building modern web applications using React, Node.js, and more. I enjoy solving complex problems and creating seamless user experiences."}/>
        </section>

        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>Bayseian Classifier</h3>
              <FadeText text={"A Naive Bayes-based classifier that detects whether an email is spam or not spam using word frequency analysis. It processes labeled email data, trains a model, and predicts spam with solid accuracy using basic NLP and machine learning techniques."} />
              <a href="https://github.com/JackMorin25/bayseian_spam_classifer" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Investment Oriented Webscraper</h3>
              <FadeText text={"Webscraper in python which takes data from the website https://www.capitoltrades.com/trades and scrapes for latest stock trades made by politicians "}/>
              <a href="https://github.com/JackMorin25/Investment-Webscraper" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Sentiment Analysis Model Comparison</h3>
              <FadeText text={"Compariosn between deciscion trees, logistic regression, naive bayes, and the BERT model to determine strengths and weaknesses of using these models for Sentiment Analysis "}/>
              <a href="https://github.com/JackMorin25/sentiment-analysis-model-coparison" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript / TypeScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>C#</li>
            <li>React / Redux</li>
            <li>Node.js</li>
            <li>HTML5 / CSS3 </li>
            <li>MongoDB / SQL</li>
            <li>Git / GitHub</li>
            <li>REST APIs</li>
            <li>Unit Testing</li>
            <li>AGILE</li>
            <li>AI / Machine Learning</li>
          </ul>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <p>
            Interested in working together or have any questions? Feel free to reach out!
          </p>
          <a href="mailto:jackmorin757@gmail.com" className="contact-button">Email Me</a>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
