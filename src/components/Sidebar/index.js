import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoManv from '../../assets/images/first-name.png'
import LogoM from '../../assets/images/letter-m.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoM} alt="logo"></img>
      <img className="sub-logo" src={LogoManv} alt="logo"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/manvinder-jawanda/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/manvinder07?tab=repositories"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
