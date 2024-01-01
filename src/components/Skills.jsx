import './Skills.css'
import htmlcssjs from '../assets/skills-icons/html_css_js.jpg'
import cpp from '../assets/skills-icons/c++.png'
import python from '../assets/skills-icons/python.png'
import react_img from '../assets/skills-icons/react.png'
import next from '../assets/skills-icons/next.png'
import node from '../assets/skills-icons/node.png'
import figma from '../assets/skills-icons/figma.jpg'
import pandas from '../assets/skills-icons/pandas.png'
import pygame from '../assets/skills-icons/pygame.png'
import sfml from '../assets/skills-icons/sfml.png'

import ina from '../assets/ina-background.png'

function Skills() {
    return (
        <div className='skills-container' id='skills'>
            <h1>Skills</h1>

            <div className='card-container'>
                <div className='card-1'>
                    <img src={htmlcssjs} alt=''></img>
                    <h3>HTML/CSS/JS</h3>
                </div>
                <div className='card-1'>
                    <img src={cpp} alt=''></img>
                    <h3>C++</h3>
                </div>
                <div className='card-1'>
                    <img src={python} alt=''></img>
                    <h3>Python</h3>
                </div>


                <div className='card-2'>
                    <img src={react_img} alt=''></img>
                    <h3>React.JS</h3>
                </div>
                <div className='card-2'>
                    <img src={next} alt=''></img>
                    <h3>Next.JS</h3>
                </div>
                <div className='card-2'>
                    <img src={node} alt=''></img>
                    <h3>Node.JS</h3>
                </div>
                <div className='card-2'>
                    <img src={figma} alt=''></img>
                    <h3>Figma</h3>
                </div>
                <div className='card-2'>
                    <img src={pandas} alt=''></img>
                    <h3>Pandas</h3>
                </div>
                <div className='card-2'>
                    <img src={pygame} alt=''></img>
                    <h3>Pygame</h3>
                </div>
                <div className='card-2'>
                    <img src={sfml} alt=''></img>
                    <h3>SFML</h3>
                </div>
            </div>
        </div>
    )
}

export default Skills

/* 
  Languages: C++, Python, HTML5, CSS, JavaScript
  Frameworks  React.js, Node.js, Pandas(Python), PyGame, SFML, Figma
  [diff colors]
*/