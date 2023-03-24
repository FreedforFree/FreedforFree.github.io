import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return <div className="top-content-container">
                <nav className="navbar">
                    <div style={{"margin-right":"14%"}}>
                        <Link to="/">
                            <img src="./images/Logo.png" width="130px" height="75px" alt="City Gym Logo" />
                        </Link>
                    </div>
                    <Link to="/">
                        <p className="navbar-item">Home</p>
                    </Link>
                    <Link to="/Plans">
                        <p className="navbar-item">Plans</p>
                    </Link>
                    <Link to="/Locations">
                        <p className="navbar-item">Locations</p>
                    </Link>
                    <Link to="/About">
                        <p className="navbar-item">About us</p>
                    </Link>
                </nav>
                <header>
                    <img className="header-image" src="./images/man_holding_dumbbell.jpg" alt="man holding a dumbbell">
                    </img>
                    <div className="headline-text">
                        <h1>CITY GYM</h1>
                    </div>
                    <Link to="/Checkout">
                        <button className="signup-button">Sign Up</button>
                    </Link>
                </header>
            </div>
};