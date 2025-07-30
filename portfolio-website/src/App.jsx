import githubLogo from './assets/github-mark-white.svg'
import linkedInLogo from './assets/linkedin-svgrepo-com.svg'
import downArrow from './assets/down-arrow-svgrepo-com.svg'
import PixelRain from './components/pixel-rain/PixelRain'
import FadeText from './components/fade-text/fadeText'
import './App.css'

//import { useInView } from 'react-intersection-observer';

function App() {

  return (
    <>
      <PixelRain />
      <h1>Jack Morin's Portfolio</h1>
      <div>
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
          <img  src={downArrow} className="downArrow" />
        </a>
      </div>
    </>
  )
}

export default App
