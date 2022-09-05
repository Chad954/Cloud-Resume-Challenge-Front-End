import React from 'react'
import "./nav.css"
import {AiFillHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiFillProject} from "react-icons/ai"
import {AiFillFolderOpen} from "react-icons/ai"
import {TiContacts} from "react-icons/ti"
import { useState } from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#') 
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillProject/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillFolderOpen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
    </nav>
  )
}

export default nav