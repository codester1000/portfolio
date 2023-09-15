import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Languages.css'

const Card = ({ image, text }) => {
  return (
    <div className='code-card'>
      <img alt={text} src={image} />
    </div>
  )
}

const Languages = () => {
  const proficientText = ["CSS", "React", "HTML", "JavaScript", "NodeJS", "MongoDB", "Illustrator", "Python", "OpenAI"]
  const proficientImages = [
    "https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
    "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    "https://www.mongodb.com/docs/assets/favicon.ico",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/640px-Python_logo_01.svg.png",
    "https://www.svgrepo.com/show/306500/openai.svg"
  ]
  const exploringText = ["Blender", "PostgreSQL", "VueJS", "AWS"]
  const exploringImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1200px-Blender_logo_no_text.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
    ]

  const proficiency = []
  for (let i = 0; i < proficientText.length; i++) {
    proficiency.push({
      text: proficientText[i],
      image: proficientImages[i]
    })
  }
  const exploring = []
  for (let i = 0; i < exploringImages.length; i++) {
    exploring.push({
      text: exploringText[i],
      image: exploringImages[i]
    })
  }
  const listOfProficient = proficiency.map((card) => {
    return <Card key={card.text} text={card.text} image={card.image} />
  })

  const listOfExploring = exploring.map((card) => {
    return <Card key={card.text} text={card.text} image={card.image} />
  })

  return (
    <section id="languages">
      <div>
        <div className='proficient'>
          <div className='container'>
            {listOfProficient}
          </div>
          <h4>MY PROFICIENCIES</h4>
        </div>
        <div className='proficient' style={{paddingTop: "50px"}}>
          <div className='container'>
            {listOfExploring}
          </div>
          <h4>WHAT I'M EXPLORING</h4>
        </div>
      </div>
    </section>
  )
}

export default Languages;