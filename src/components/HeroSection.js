import React from 'react';
import  "./HeroSection.css";
import "../App.css"

const HeroSection = () => {
    return (
        <div className='hero-container'>
       {/* <img src='./img-3.jpg' alt='llllllllllllll'/>  
      {/* <video controls poster='.././assets/images/img-1.jpg'>
        <source src="./video-1.mp4" ></source>
      </video> */} */
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='.hero-btns'>
        
        <button className='  btn-mobile nav-btn-outline btn--large'>GET STARTED</button>
        <button className='btn-mobile btn--primary btn--large'> WATCH TRAILER <i className='far fa-play-circle' /></button>


      </div>
      </div>
    );
};

export default HeroSection;