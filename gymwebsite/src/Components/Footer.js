import React from "react";

export default function Footer() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Thank you for Signin up to our newsletter!");
    }
    return(
        <footer>
            <div className="footer-logo-container">
                <img src="./images/LogoDark.png" width="400px" height="180px" alt="City Gym Logo"/>
            </div>
            <div className="footer-rightside-container">
                <h5 className="footer-h5">Sign up to our Newsletter and receive Offers and Bonuses!</h5>
                <div className="newsletter-container">
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input className="newsletter-email" required type="email" placeholder="E-Mail"></input>
                        <button className="newsletter-button">Sign-up</button>
                    </form>
                </div>
                <div className="footer-info-container">
                    <div>
                        <h6>Contact</h6>
                        <p className="footer-items">city-gym@outlook.com</p>
                    </div>
                    <div>
                        <h6>Pricing</h6>
                        <p className="footer-items">Small Package</p>
                        <p className="footer-items">Medium Package</p>
                        <p className="footer-items">Large Package</p>
                    </div>
                    <div>
                        <h6>Locations</h6>
                        <p className="footer-items">CITYGYM Boston</p>
                        <p className="footer-items">CITYGYM New York</p>
                        <p className="footer-items">CITYGYM Los Angeles</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}