import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact =() =>{
    return(
        <div className="profile-container">
               <div className="profile-card">
                 <div className="info">
                    <h1>Yatin Sharma</h1>
                    <p> Beginner Full-Stack Developer</p>
                </div>
                <div className="contact">
                <p>E-mail : yatins113@gmail.com</p>
                <p></p>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/_yatin_.sharma/profilecard/?igsh=ZG1ucXpiNHk2bGhi" target="_blank" rel="noopener noreferrer" clas>
                    <FontAwesomeIcon icon={faInstagram} className="icons"/>
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    
                    </a>
                    <a href="https://github.com/yatin-coder07" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icons"/>
                    </a>

                </div>
                <div className="home-button-container">
                  <Link to={'/'}><button class="home-button">Home</button></Link>
           </div>

            </div>
             
          
        </div>
        
    
    );
}
export default  Contact