import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3500)

    return () => clearTimeout(timeOut)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img className="portfolio-image" src={port.cover} alt="ETH"></img>
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={'More Work'.split('')}
            idx={18}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
