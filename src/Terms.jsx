import React from "react";
import { Link } from "react-router-dom";



    
        
        const Terms = () => {
          return (
            <div className="terms-page">
              <header>
                <div className="container">
                  <h1>Cryp Checker</h1>
                  <nav>
                    <ul>
                     
                      <li><a href="/about">About</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/terms" className="active">Terms & Conditions</a></li>
                    </ul>
                  </nav>
                </div>
              </header>
        
              <main className="terms-content">
                <div className="container">
                  <h2>Terms and Conditions</h2>
        
                  <p>Welcome to Crypto Price Checker! Please read the following terms and conditions carefully before using our website.</p>
        
                  <h3>1. Acceptance of Terms</h3>
                  <p>By accessing and using Crypto Price Checker (the "Site"), you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use the Site.</p>
        
                  <h3>2. Use of the Website</h3>
                  <p>You agree to use Crypto Price Checker solely for personal or informational purposes. The information provided on this site is not intended as financial advice and should not be construed as such. Always do your own research before making any investment decisions.</p>
        
                  <h3>3. No Guarantee of Accuracy</h3>
                  <p>While Crypto Price Checker strives to provide accurate and up-to-date cryptocurrency prices, we cannot guarantee the accuracy, completeness, or reliability of any data or information on the Site. Prices are provided for informational purposes only and may be subject to change without notice.</p>
        
                  <h3>4. Limitation of Liability</h3>
                  <p>Crypto Price Checker and its creators are not responsible for any damages, losses, or other liabilities arising from your use of the Site, including but not limited to financial losses due to incorrect or outdated cryptocurrency prices.</p>
        
                  <h3>5. Privacy Policy</h3>
                  <p>Your use of the Site is also governed by our <a href="/privacy">Privacy Policy</a>, which outlines how we collect, use, and protect your personal data.</p>
        
                  <h3>6. Modifications to Terms</h3>
                  <p>We reserve the right to modify these terms and conditions at any time. We encourage you to review these terms periodically for any updates. Continued use of the Site after changes to the terms constitutes your acceptance of those changes.</p>
        
                  <h3>7. Contact Us</h3>
                  <p>If you have any questions about these terms and conditions, please feel free to <a href="/contact">contact us</a>.</p>
        
                </div>
              </main>
        
              <footer>
                <div className="container">
                  <p>&copy; 2025 Crypto Price Checker. All Rights Reserved.</p>
                </div>

              </footer>
              <Link to={'/'}><button class="home-button">Home</button></Link>
              
            </div>
          )};
 
          export default Terms
