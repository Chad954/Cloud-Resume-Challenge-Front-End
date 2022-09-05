import React from 'react'
import "./portfolio.css"
import RESUMEPIC from '../../assets/resumepic.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>\
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container protfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={RESUMEPIC} alt="" />
        </div>
        <h3>Cloud Resume Challenge</h3>
        <h5>Resume Coded in HTML and styled with CSS hosted on the cloud using AWS services.</h5>
        <div className="portfolio__item-cta">
        <a href="https://github.com/Chad954/Cloud_Resume_challenge" className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        </div>

        <div className="portfolio__item-cta">
        <a href="https://chadsresume.link" className='btn' target='_blank' rel="noopener noreferrer">Live Demo</a>
        </div>      
        

      </article>
    </div>
    </section>
  )
}

export default portfolio