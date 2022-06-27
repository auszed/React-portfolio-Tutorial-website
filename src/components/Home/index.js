import './index.scss'

import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
    return (
    <div className="container home-page">
        <div className="text-zone">
            <h1> Hi, <br/> I'm
            <img src= {LogoTitle} alt="Developer" /> 
            Josh
            <br/>
            FrontEnd Developer
            </h1>
            <h2>Data analyst, UX designer and FrontEnd Developer</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
    </div>
    );
}

export default Home
