import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc"
import MyPDF from '../Cody_McCarney_Resume.pdf';
import Laptop from './Laptop';
import Hidden from '@mui/material/Hidden';


const Banner = () => {
  return (
    <section id="home" className="px-3" style={{maxWidth: "100%"}}>
      <div className='home-section'>
        <div className="left-section">
          <h1 className='first-name'>CODY</h1>
          <h1 className='last-name'>MCCARNEY</h1>
          <ul className='social-share'>
            <li><a href="https://github.com/codester1000" target="_blank"><BsGithub size={40}/></a></li>
            <li><a href="https://www.linkedin.com/in/cody-mccarney-8898b8179/" target="_blank"><BsLinkedin size={40}/></a></li>
            <li><a href="https://discordapp.com/users/692547174839353405" target="_blank"><BsDiscord size={40} /></a></li>
            <li><a href={MyPDF} target="_blank"><VscFilePdf size={40}/></a></li>
          </ul>
        </div>
        <div className="right-section">
          <Hidden lgDown>
            <Laptop />
          </Hidden>
        </div>
      </div>

    </section>
  )
}

export default Banner;