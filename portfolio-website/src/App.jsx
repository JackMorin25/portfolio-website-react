import githubLogo from './assets/github-mark-white.svg'
import PixelRain from './PixelRain'
import './App.css'

function App() {

  return (
    <>
      <PixelRain />
      <h1>Jack Morin's Portfolio</h1>
      <div>
        <a href="https://github.com/JackMorin25" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
      </div>  
    </>
  )
}

export default App
