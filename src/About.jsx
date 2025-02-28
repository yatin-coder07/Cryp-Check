import React from "react";
import { Link } from "react-router-dom";

const About =()=>{
    return(
        <div className="about-container">
          <div className="title">
          <h1 ><span class="Cryp">Cryp</span> Check</h1>
          </div>
           <div className="description1">
           <h1>About this project</h1>
           <p className="about-description">Welcome to my website! I'm Yatin Sharma, and this is my first project built using React.<br></br> As a passionate developer, I wanted to create a platform where users can easily access live cryptocurrency rates. <br /> Whether you're a seasoned trader or just curious about the latest market trends, this website allows you to find real-time rates for any crypto you’re interested in.</p>
           </div>
           <div className="description2">
            <h1>About this Website:</h1>
            <p className="about-description">The website is fully interactive, providing an engaging user experience with quick and easy navigation. I’ve built it from the ground up using React, learning and exploring along the way, and I’m excited to share it with you! Your feedback is always welcome as I continue to improve and expand my skills with future projects. Enjoy exploring the world of crypto!</p>
           </div>
          <div className="button">
          <Link to={"/"}><button className="home-button">
            Home
           </button></Link>
          </div>
        </div>
    );
}
export default About