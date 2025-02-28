import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoPriceChecker = () => {
  const [crypto, setCrypto] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`
        );
        setPrice(response.data[crypto].usd);
        setError(null);
      } catch (err) {
        setError("Failed to fetch price");
      }
    };

    if (crypto !=="") {
      const timerId = setTimeout(fetchPrice, 1000); // Debounce API requests

      return () => clearTimeout(timerId); // Cleanup the timer on component unmount or before next effect
    }
  }, [crypto]);

  const handleInputChange = (event) => {
    setCrypto(event.target.value);
  };

  const handleSearch = () => {
    setCrypto(query.toLowerCase());
  };

  return (
    <div className="box">
      <div className="input-wrapper">
        <input type="text" className="search-input"
        placeholder="Start checking the price..."
        value={crypto} 
        onChange={handleInputChange}/>
        <button className="start">Start <br />Searching</button>
      </div>
         <div className="card-container gradient-border">
      
            
      <div className="small-container">
        <span className="Name">Coin Name</span>
        <span className="Value">{crypto}</span></div>
      <div className="small-container">
        <span className="Name">Price</span>
        <span className="Value">${price} USD</span></div>
      <div className="small-container">
        <span className="Name">Value</span>
        <span className="Value">None</span></div>
      <div className="small-container">
        <span className="Name">Date</span>
        <span className="Value">9 Feb</span></div>
            
        </div>
    </div>
      
 
  );
};

export default CryptoPriceChecker;