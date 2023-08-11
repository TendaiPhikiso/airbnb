import React from 'react'
import photoGrid from "../assets/images/photo-grid.png";
function Hero() {
  return (
    <section className='hero'>
     <img className='hero-image' src={photoGrid} alt='Hero' />
     <h1 className='heading'>Online Experience</h1>
     <p className='para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    
    </section>
  )
}

export default Hero