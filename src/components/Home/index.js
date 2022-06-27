import './index.scss'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'

import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

// setLetterClass
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray_First = ['J','o']
    const nameArray_Second = ['h']
    const jobArray = ['F','r','o','n','t','E','n','d', 'D','e','v','e','l','o','p','e','r']

    // añadimos effect a las letras
    useEffect(() =>{
        setTimeout (() =>{
            setLetterClass('text-animate-hover')
        }, 2000)
    },[])
    

    return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={`${letterClass} _11`}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray_First}
                idx={15} />
                <img src= {LogoTitle} alt="Developer" /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray_Second}
                idx={16} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={17} />             
            
            </h1>
            <h2>Data analyst, UX designer and FrontEnd Developer</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
        <Logo />
    </div>
    );
}

export default Home
