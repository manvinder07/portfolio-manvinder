import LogoM from '../../assets/images/letter-m.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n', 'v', 'i', 'n', 'd', 'e', 'r', ',']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    '',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)

    return () => clearTimeout(timeOut)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoM} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={19}
            ></AnimatedLetters>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            ></AnimatedLetters>
          </h1>
          <h2>Back End | Front End | Full-Stack</h2>
          <a
            className="flat-button"
            href="mailto:manvinderjawanda@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
        <img className="solid-logo" src={LogoM} alt="M" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
