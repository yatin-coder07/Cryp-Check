import React from "react";
import { Link } from "react-router-dom";
function Footer(){

    return(
        <div className="footer-box">
            <div className="contact"><p>Contact info: <br></br>
            7973650983</p>
           </div>
           <div className="email"> <p>Email: <br />
           yatins113@gmail.com</p></div>
           
          <div className="terms">
           <Link to={'/terms'}>terms and conditions</Link>
          </div>

        </div>
    );
    
}

export default Footer