import Website from "./Website";
import React from 'react';
import './App.css';
import './index.css';
import HeroSection from "./HeroSection";
import CryptoPriceChecker from "./Api";
import InfoCards from "./InfoCards";
import wallet1 from "../public/images/wallet1.svg" ;
import wallet2 from "../public/images/wallet1.svg" ;
import Profile1 from "../public/images/profit1.svg" ;
import insurance1 from "../public/images/insurance1.svg" ;
import Footer from "./Footer";






function App(){
  
const features=[
  {
    id : 1,
   src : wallet1,
   title :"value",
   description:"invest from your own wallet and withdraw wihtout any issues. this site is a trusted platform",
  },
  {
    id : 2,
    src : Profile1,
    title :"yield",
    description:"Get high returns on profitable crypto ",

  },
  {
    id : 3,
    src : insurance1,
    title :"insurance",
    description:"Get impermanent loss protection on high investmets with our trusted API's ",
  },
  {
    id : 4,
    src : wallet2,
    title :"staking",
    description:"Earn on your own with our trusted sources and encripted investing"
  },
];

  return(
    <div className="home">
        <Website/>
        <HeroSection/>
        <CryptoPriceChecker/>
        
       

        <div className="cards-list">
        { features.map((feature) => {
       return(
         <InfoCards key={features.id} title = {feature.title} imgUrl={feature.src}> {<p>{feature.description} </p>}</InfoCards>
        );
       })}

        </div>
        <Footer/>
       
         
        

      
       
    </div>

  
  );
}

export default App