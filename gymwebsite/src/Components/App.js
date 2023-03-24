import React from "react";
import Header from "./Header.js"
import InfoBox from "./InfoBox.js"
import Testimonials from "./Testimonials";
import Footer from "./Footer.js";
export default class App extends React.Component {
    render() {
        return(
                <div>
                    <Header />
                    <InfoBox />
                    <main>
                        <Testimonials />
                    </main>
                        <Footer />
                </div>
        )
    }
}