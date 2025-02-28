import React, { useState } from "react" ;
import Hero from "../public/images/hero.svg" ;

const HeroSection = () =>{
    const [inputValue , setInputValue]=useState("");
    return(
        <div className="hero-section-container">
            <div className="hero-info-wrapper">
                <div className="hero-info-text">
                    <h1 className="Header1">
                        The <br /> <span className="highlighted">Decentralised</span> <br />Cross-chain <br /> Exchange
                    </h1>
                    <p className="hero-info-description">
                        Its a long estabished fact that the user will be <br /> destracted by the redable content of the page when <br />looking at its layout.
                    </p>
                   
                </div>

            </div>
            <div className="hero-image-container">
                <div>
                    <img src={Hero} alt="" className="img" />
                </div>

            </div>

        </div>
    )
}
export default HeroSection