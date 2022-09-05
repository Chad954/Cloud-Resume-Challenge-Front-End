import React from 'react'
import "./about.css"
import CHAD from '../../assets/chad.JPG'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={CHAD} alt="About Image" />
          </div>
        </div>

        <p>
        Adaptable hard working Cloud Engineer with 1 year of experience in
        the IT domain and a proven knowledge of cloud development. Aiming
        to leverage my skills to successfully fill the Cloud Engineer / Developer
        role at your company.
        </p>

        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
      </div>
    </section>
  )
}

export default about