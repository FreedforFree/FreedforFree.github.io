import React from "react";

export default class InfoBox extends React.Component {
    render() {
        return(
            <div>
                <section>
                    <div className="main-background-container">
                        <div className="main-text-div">
                            <h2>Welcome To City Gym</h2>
                            <p className="introduction-p">We believe in improving 1% every day. We're committed to helping you achieve your best self! Our experienced trainers and top-notch equipment are here to support you every step of the way, with tailored workout plans that meet your unique needs and goals. Whether you're a seasoned athlete or just starting out, we're confident you'll love our welcoming and encouraging environment. Come sweat with us and see the results you've been dreaming of!</p>
                        </div>
                        <div className="main-offer-container">
                            <div className="main-offer-cell1">
                                <h4>Premium Equipment</h4>
                                <p className="main-offer-cell-p">City Gym only uses top-of-the-line Equipment by Matrex</p>
                            </div>
                            <div className="main-offer-cell2">
                                <h4>Personalized Coaching</h4>
                                <p className="main-offer-cell-p">Book low-cost Coaching sessions that fit your schedule</p>
                            </div>
                            <div className="main-offer-cell1">
                                <h4>Free Drinks and Snacks</h4>
                                <p className="main-offer-cell-p">Enjoy healthy Protein, BCAA and EAA Drinks and powerful foods for free!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}