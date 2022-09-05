import React from 'react'
import RESUME2 from "../../assets/resume2.PDF"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME2} download className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA