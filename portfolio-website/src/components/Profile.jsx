import './Profile.css'
import pfp from '../assets/pfp.png'
import resume from '../assets/Resume.pdf'

function Profile() {
    return (
        <div className='profile-container'>
            <h1>Hello Hello! I'm Vicki!</h1>
            <img className='pfp' src={pfp} alt='pfp'></img>
            <h1>I'm a Software Developer! ⸜(｡˃ ᵕ ˂ )⸝♡</h1>
            <h3>Graduating in June 2024 with a focus in Frontend Tech and Game Development.</h3>
            <a href={resume} target='_blank'><span className='resume-button'>Resume</span></a>
        </div>
    )
}
export default Profile