import React from "react";
import {Link} from "react-router-dom";
export default class Checkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            button_id:0,
            method:"",
        }
    }
    handleButtonClick(id) {
        const btns = document.getElementsByClassName("payment-method-container");
        for (let i=0; i<btns.length; i++) {
            btns[i].style.border = "1px solid gray";
        }
        this.setState({button_id: id});
        const btn = document.getElementById("btn-"+String(id))
        btn.style.border = "2px solid #FF612F";
        switch (id) {
            case 1:
                this.setState({method:"Credit Card"})
                break
            case 2:
                this.setState({method:"Paypal"})
                break
            case 3:
                this.setState({method:"Cash at your nearest Location"})
                break
            default:
                this.setState({method:""})
                break
        }
    }
    render() {
        return(
        <div className="chekout-page">
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
            <main className="main-checkout-container">
                <div className="main-checkout-left-container">
                    <img className="checkout-picture" src="./images/Checkout Picture.jpg" width="500px" height="775px" alt="Man Posing" />
                </div>
                <div className="main-checkout-right-container">
                    <div className="personal-info-fields">
                        <div className="personal-info-topline">
                            <input className="personal-info-field" type="text" placeholder="First Name"/>
                            <input className="personal-info-field" type="text" placeholder="Last Name"/>
                        </div>
                        <input className="personal-info-field" type="text" placeholder="Address"/>
                        <input className="personal-info-field" type="email" placeholder="E-Mail"/>
                    </div>
                    <div className="checkout-field">
                        <div className="payment-method-container-row">
                            <div className="payment-method-container" id="btn-1" onClick={() => this.handleButtonClick(1)}>
                                <img src="./images/CreditCard.png" alt="credit card icon" />
                            </div>
                            <div className="payment-method-container" id="btn-2" onClick={() => this.handleButtonClick(2)}>
                                <img src="./images/PayPal.png" width="120" alt="credit card icon" />
                            </div>
                            <div className="payment-method-container" id="btn-3" onClick={() => this.handleButtonClick(3)}>
                                <img src="./images/Cash.png" alt="credit card icon" />
                            </div>
                        </div>
                        <div className="checkout-button">
                            <p>Checkout with {this.state.method}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        )
    }
}