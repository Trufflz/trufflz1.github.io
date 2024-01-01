import './Home.css'
import background from '../assets/background.jpg'
import linkedin from '../assets/LinkedIn.png'
import github from '../assets/GitHub.png'
import resume from '../assets/Resume-Icon.png'
import resumeLink from '../assets/Resume.pdf'
const linkedinLink = 'https://www.linkedin.com/in/vvo32/'
const gitLink = 'https://github.com/Trufflz?tab=repositories'

function Home() {
    return (
        <div className='container'>
            <img className='background' src={background} alt=''></img>

            <div className='title-container'>
                <h1>Vincent Vo</h1>
                <h2>Frontend Developer & Game Developer</h2>
                <div className='socials'>
                    <a href={linkedinLink} target='_blank' rel='noreferrer'><img src={linkedin} alt=''></img></a>
                    <a href={gitLink} target='_blank' rel='noreferrer'><img src={github} alt=''></img></a>
                    <a href={resumeLink} target='_blank' rel='noreferrer'><img src={resume} alt=''></img></a>
                </div>
            </div>
        </div>
    )
}

export default Home