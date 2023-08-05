import "./Navbar.css"

const Navbar=()=>{
    return(
        <>
            <nav className="container main">
                <a href="#skills">Skills</a>
                <a href="#profile">Profile</a>
                <a href="#projects">My Projects</a>
                <a href="mailto:onurerkdizdar@gmail.com">Contact Me</a>
            </nav>
        </>
    )
}

export default Navbar;