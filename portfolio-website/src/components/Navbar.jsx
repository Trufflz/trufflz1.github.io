import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='nav-container'>
                <ul className='nav-list'>
                    <li><a className='nav-item' href='#'>Vicki Vo</a></li>
                    <li><a className='nav-item' href='#projects'>Project</a></li>
                    <li><a className='nav-item' href='#skills'>Skills</a></li>
                    <li><a className='nav-item' href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar