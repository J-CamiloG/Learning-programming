import './header.css'
import logojs from '../assets/js.svg'


const ButtonDarkMode = () =>{
    return(
        <div className="toggle-switch">
            <label className="switch-label">
                <input type="checkbox" className='checkbox' />
                <span className="slider"></span>
            </label>
        </div>  
    )
}


const Header = () =>{
    return(
        <>
            <header className="header">
            <img src={logojs} alt="" />

                <nav className="nav-container">
                    <ul className="nav-items">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">other</a></li>
                        <li><a href="#">other</a></li>
                        <li><a href="#">Dark Mode</a></li>
                        <ButtonDarkMode />
                    </ul>
                </nav>
                
            </header>
        </>
    )
}

export default Header;