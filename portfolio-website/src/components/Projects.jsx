import './Projects.css'
import ta_img from '../assets/ta.png'
import mic_img from '../assets/mic-check.png'
import port_img from '../assets/portfolio.png'
import ss_img from '../assets/sinking-shapes.png'
import ttt_img from '../assets/ttt.png'
import rps_img from '../assets/rps.png'

function Projects() {
    return (
        <div className='project-container' id='projects'>
            <h1>My Projects</h1>

            <div className='card-container'>
                <div className='cards'>
                    <img src={ta_img} alt=''></img>
                    <h3>TA Hiring Website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a href='#' className='read'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={mic_img} alt=''></img>
                    <h3>"Mic Check" Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a href='#' className='read'>Read More</a>
                </div>
                
                <div className='cards'>
                    <img src={port_img} alt=''></img>
                    <h3>Portfolio Website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a href='#' className='read'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={ss_img} alt=''></img>
                    <h3>"Sinking Shapes" Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a href='#' className='read'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={ttt_img} alt=''></img>
                    <h3>Tic-Tac-Toe Website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a href='#' className='read'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={rps_img} alt=''></img>
                    <h3>"Rock Paper Scissors" Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a href='#' className='read'>Read More</a>
                </div>


            </div>
        </div>
    )
}

export default Projects
/* 
    > TA Hiring Website (guud)
    > Mic Check (guud)
    > Portfolio Website (guud)
    > Sinking Shapes (guud)
    > Tic Tac Toe Website
    > Rock Paper Scissors
*/