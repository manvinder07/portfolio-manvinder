import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
  faJava,
  faHtml5,
  faPhp,
  faReact,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)

    return () => clearTimeout(timeOut)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              idx={22}
            />
          </h2>
          <h3>University of British Columbia</h3>
          <h4>Bachelor of Science | Major Computer Science</h4>
          <h4>May 2020 - 2024, Vancouver BC</h4>
          <p>
            Software Construction, Introduction to Computer Systems, Basic
            Algorithms and Data Structures, Intermediate Algorithm Design and
            Analysis, Introduction to Artificial Intelligence, Introduction to
            Software Engineering, Computer Hardware and Operating Systems,
            Introduction to Relational Databases, Internet Computing,
            Introduction to Theory of Computing, Advanced Relational Databases,
            Distributed Systems, Video Game Programming
          </p>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={30}
            />
          </h2>
          <h3>UBC Student Housing & Community Services</h3>
          <h4>Programmer Analyst</h4>
          <h4>May 2022 - May 2024</h4>
          <ul class="experience-list">
            <li>
              Automated repetitive workflows using PHP and SQL, reducing manual
              processing time by 30+ hours per month and improving system
              efficiency.
            </li>
            <li>
              Optimized database queries and backend logic in PHP and SQL,
              cutting response times by 40%, leading to a faster and more
              scalable application.
            </li>
            <li>
              Reduced support tickets by 25% by debugging and enhancing web
              applications using JavaScript, PHP, and SQL, improving system
              stability and user experience.
            </li>
            <li>
              Developed and maintained internal web tools with HTML, CSS,
              JavaScript, and PHP, enhancing user accessibility and streamlining
              daily operations.
            </li>
            <li>
              Improved onboarding efficiency by documenting system processes and
              troubleshooting steps, reducing new developer ramp-up time by 50%.
            </li>
            <li>
              Collaborated with cross-functional teams to troubleshoot and
              implement new features, resolving critical system issues 50%
              faster and minimizing downtime.
            </li>
          </ul>
        </div>
        <div className="stage-cube-cont">
          <div className="cubeSpinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031"></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPhp} color="#B19CD7"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
              ></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faPython}
                color="#ADD8E6"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
