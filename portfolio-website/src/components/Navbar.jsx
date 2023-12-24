import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar-container'>
            <ul className='nav-list'>
                <li><a className='nav-item' href='#'>Home</a></li>
                <li><a className='nav-item' href='#projects'>Projects</a></li>
                <li><a className='nav-item' href='#skills'>Skills</a></li>
            </ul>
        </div>

    )
}

export default Navbar