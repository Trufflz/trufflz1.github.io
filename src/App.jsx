import './App.css'

//Components
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
    </div>
  )
}

export default App


/* Sections
  > Home
    1) responsive text sizing
    2) on hover, icons glow pink
    3) streak follows mouse
    4) down arrow button?
    5) Make Title name stand out more (animations on name?)

  > Projects
    1) Replace 'Lorem Ipsum' Text
    2) fullscreen? ==> space out cards, 3 cards / row only ==> media query?
    3) Stop Grid from overflowing to Skills Section
  
  > Skills
    1) 

  > Contact me
*/

//  ⸜(｡˃ ᵕ ˂ )⸝♡
//  ☜(ﾟヮﾟ☜)