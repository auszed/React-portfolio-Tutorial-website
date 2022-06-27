import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLink, faGithub } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
    <div className ='nav-bar'>
        
        <Link className = 'logo' to='/'>
            <img src={logoS} alt = "logo" />
            <img className= 'sub_logo' src={logoSubtitle} alt = "slobodan" />    
        </Link>
        
        <nav>
            <NavLink exact="true" activeClassName="active" to="/" className="home-link">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/hanns-juarez/'>
                    <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/hannsflip'>
                    <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar