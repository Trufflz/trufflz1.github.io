import './Projects.css'
import ta_img from '../assets/ta.png'
import mic_img from '../assets/mic-check.png'
import portf_img from '../assets/portfolio.png'
import ss_img from '../assets/sinking-shapes.png'
import ttt_img from '../assets/ttt.png'
import rps_img from '../assets/rps.png'
const ta_link = 'https://github.com/UCR-Senior-Design/course-project-rvea'
const mic_link = 'https://devpost.com/software/mic-check'
const portf_link = 'https://github.com/Trufflz/portfolio-website'
const ss_link = 'https://github.com/Trufflz/Sinking-Shapes'
const ttt_link = 'https://github.com/Trufflz/Tic-Tac-Toe-Website'
const rps_link = 'https://github.com/Trufflz/Rock-Paper-Scissors'

function Projects() {
    return (
        
        <div className='project-container' id='projects'>
            <h1>My Projects</h1>
            <div className='card-container'>
                <div className='cards'>
                    <img src={ta_img} alt=''></img>
                    <h3>TA Hiring Website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a className='btn' href={ta_link} target='_blank' rel='noreferrer'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={mic_img} alt=''></img>
                    <h3>"Mic Check" Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a className='btn' href={mic_link} target='_blank' rel='noreferrer'>Read More</a>
                </div>
                
                <div className='cards'>
                    <img src={portf_img} alt=''></img>
                    <h3>Portfolio Website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a className='btn' href={portf_link} target='_blank' rel='noreferrer'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={ss_img} alt=''></img>
                    <h3>"Sinking Shapes" Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a className='btn' href={ss_link} target='_blank' rel='noreferrer'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={ttt_img} alt=''></img>
                    <h3>Tic-Tac-Toe Website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a className='btn' href={ttt_link} target='_blank' rel='noreferrer'>Read More</a>
                </div>

                <div className='cards'>
                    <img src={rps_img} alt=''></img>
                    <h3>"Rock Paper Scissors" Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo sapien eget dolor blandit semper.</p>
                    <a className='btn' href={rps_link} target='_blank' rel='noreferrer'>Read More</a>
                </div>


            </div>
        </div>
    )
}

export default Projects