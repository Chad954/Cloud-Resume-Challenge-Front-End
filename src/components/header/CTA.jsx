import React from 'react'
import RESUME3 from "../../assets/Resume3.PDF"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME3} download className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA