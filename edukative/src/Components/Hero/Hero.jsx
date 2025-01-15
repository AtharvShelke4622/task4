import React from 'react'
import './Hero.css'
import classroom from '../../assets/class.jpg'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="hero_header">Unlock Your Potential With Top-Tier 
        <br/> Online Courses</h1>
        <p>Personalized Learning experiences designed to help achieve your professional and 
        <br/> personal goals.Gain the skills to excel in today's fast-paced world </p> 
      <div className="btn">
        <button className="cta_button">Explore Courses</button>
      </div>
      <img src={classroom} alt='hero_img' className='hero_img'/>
    </div>
      
  </div>
  )
}

export default Hero
