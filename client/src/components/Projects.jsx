import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGithub, BsDiscord,  } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import '../Projects.css'

import myProjects from '../projects.json'

const SingleProject = ({ project }) => {
  return (
    <li>
      <a href="" class="card">
        <img src={project.img} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <div class="card__header-text">
              <h3 class="card__title">{project.title}</h3>          
            </div>
            <ul className='social-share'>
              <li><a href="https://github.com/codester1000" target="_blank"><BsGithub size={30} /></a></li>
              {project.website && <li><a href={project.website} target="_blank"><CgWebsite size={30} /></a></li>}
              {project.discord && <li><a href={project.discord} target="_blank"><BsDiscord size={30} /></a></li>}
            </ul>  
          </div>
          <p class="card__description">{project.description}</p>
          <p class="card__description">{project.learning}</p>
        </div>
      </a>      
    </li>
  )
}

const Projects = () => {

  const projectsList = myProjects.map((project) => {
    return <SingleProject project={project} />
  })

  return (
    <section id="projects">
      <div className='projects-title'>
        <h1>PROJECTS</h1>
      </div>
      <div class='cards-div'>
      <ul class="cards">
        {projectsList}
      </ul>
      </div>
    </section>
  )
}

export default Projects