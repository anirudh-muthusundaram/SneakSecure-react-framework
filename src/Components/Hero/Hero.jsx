import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return(
        <div className='hero'>
            <div className='hero-left'>
                <p>New!</p>
                <p>Collections!</p>
                <p>For Everyone!!</p>
                
                <div className="hero-latest-btn">
                    <div>Latest Collection
                    <img src={arrow_icon} alt=""/></div>
                </div>
                </div>
                
            <div className='hero-right'>
                <img src={hero_image} alt=""/>
            </div>

        </div>
    )
}

export default Hero