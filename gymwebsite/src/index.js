import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App"
import PlansPage from "./Components/PlansPage"
import Checkout from "./Components/Checkout"
import { BrowserRouter, Route, Routes } from "react-router-dom";

class Website extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Plans" element={<PlansPage />} />
                    <Route path="/Checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
            )
        }
}

const root = document.getElementById("root");
ReactDOM.render(<Website />, root);