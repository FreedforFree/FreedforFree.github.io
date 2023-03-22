import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return <div className="top-content-container">
                <nav className="navbar">
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
                        <h1>City Gym</h1>
                    </div>
                </header>
            </div>
};