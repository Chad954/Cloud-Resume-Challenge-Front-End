import React from 'react'
import "./header.css"
import CTA from "./CTA"
import CHADDDD from '../../assets/chadddd.png'
import HeaderSocials from './HeaderSocials'




const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chad Case</h1>
        <h5 className="text-light">Cloud Engineer / Developer</h5>
        <CTA /> 
        <HeaderSocials />

        <div className="chadddd">
          <img src={CHADDDD} alt="chadddd" />
        </div>

        <div className='site_counter'>
          

        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )

  


 

  

}

export default header