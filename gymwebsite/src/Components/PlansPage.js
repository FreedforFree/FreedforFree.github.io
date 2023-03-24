import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
export default class PlansPage extends React.Component{
    render() {
        return(
            <div>
                <div className="top-content-container">
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
                                <h1 style={{"margin-top":"100px"}}>Our Plans</h1>
                            </div>
                        </header>
                </div>
                <main>
                    <div className="main-plan-container">
                            <Link to="/Checkout">
                                <div className="main-plan-cell1">
                                    <h2 className="main-plan-header-h2">Small Package</h2>
                                    <p className="main-plan-cell-p1">Access to Signup Location, Free Drinks and Snacks</p>
                                    <h5 className="main-cell-price">$39,99</h5>
                                </div>
                            </Link>
                            <Link to="/Checkout">
                            <div className="main-plan-cell2">
                                <h2 className="main-plan-header-h2">Medium Package</h2>
                                <p className="main-plan-cell-p2">One <span style={{"color" : "#FF612F"}}>Weekly Coaching Session</span>, Access to all Locations, Free Drinks and Snacks</p>
                                <div className="main-plan-cell2-rectangle">
                                    <p className="main-plan-cell2-rectangle-p">Most Popular</p>
                                </div>
                                <h5 className="main-cell-price">$79,99</h5>
                            </div>
                            </Link>
                            <Link to="/Checkout">
                            <div className="main-plan-cell1">
                                <h2 className="main-plan-header-h2">Large Package</h2>
                                <p className="main-plan-cell-p1">3x/Week Coaching, <span style={{"color" : "#FF612F"}}>Monthly Biometric Analysis</span>, Access to all Locations</p>
                                <h5 className="main-cell-price">$129,99</h5>
                            </div> 
                            </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}