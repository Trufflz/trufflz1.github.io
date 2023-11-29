import { useState, useEffect } from 'react' //dark and light mode?
import './App.css'

//components
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'



function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
    </>

  )
}

export default App

/* Sections
  > navbar
  > profile
  > Projects
  > skills
  > contact me
*/


//  ⸜(｡˃ ᵕ ˂ )⸝♡
//  ☜(ﾟヮﾟ☜)