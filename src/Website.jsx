import React from "react";
import { useState } from "react";
import Model from 'react-modal'
import { Link } from "react-router-dom";


const Website = () =>{

    const[signUp , setSignUp] = useState(false);
  

    return(
        
        <div className="header">

            <div className="name">
            <h1> <span className="Cryp">Cryp</span> Check</h1>
            </div>
            <div className="menu">
             <div className="links">
              
                   <a href="#home" >Home</a>
                   <Link to={"/about"}>About</Link>
                   <Link to={"/contact"}>Contact</Link>
                   
                    
              

                </div>
          
            </div>
            
            <div className="sign-in">
            <button className="signUp" onClick={()=>setSignUp(true)}>Sign Up</button>
            <Model isOpen={signUp} onRequestClose={()=>setSignUp(false)} className="signup-modal"  overlayClassName="signup-modal-overlay">
                <div className="pop-container">
                    <div className="heading">
                    <h1 className="title">sign-up</h1>
                    <button className="close-button" onClick={()=>setSignUp(false)}>X</button>
                    </div>
                    <div className="info">
                        <p><span className="text">E-mail</span></p>
                     <input type="text" className="input-info" placeholder="Enter Your email"/>
                    </div>
                    <div className="info">
                        <p>Password</p>
                     <input type="text" className="input-info" placeholder="set your password"/>
                    </div>
                   
                        <button className="sign-up-login">Sign-up</button>
                    
                  
                    
                </div>
            </Model>
            
            </div>


</div>
);

    

}

export default Website 