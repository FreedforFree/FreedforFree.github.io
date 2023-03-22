import React from "react";

export default class Testimonials extends React.Component {
    render() {
        return(
            <section className="main-testimonial-container">
                <div className="main-testimonial-background-container">
                    <h2 className="testimonial-h2">TESTIMONIALS</h2>
                    <div className="main-testimonial-card-container">
                        <div className="main-testimonial-card1">
                            <div className="main-testimonial-card-2-topline">
                                <h3>Brian Carter</h3>
                                <img className="male-picture" src="./images/male-picture.jpg" alt="male person"></img>
                            </div>
                            <p>"I've been a member of City Gym for the past year, and I can honestly say it's been the best decision I've made for my fitness journey. The experienced trainers and top-notch equipment have helped me achieve my fitness goals and improve my overall health. What I love most about City Gym is the welcoming and supportive community that motivates me to push myself harder every day"</p>
                            <div className="five-star-container">
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                            </div>
                        </div>
                        <div className="main-testimonial-card2">
                            <div className="main-testimonial-card-2-topline">
                                <h3>Katie Williams</h3>
                                <img className="female-picture" src="./images/female-profile.jpg" alt="female person"></img>
                            </div>
                            <p>I've been a member of City Gym for the past few months and I have to say, it's been an amazing experience. The trainers are knowledgeable and supportive, and they really take the time to understand my fitness goals and tailor my workout plan to meet my needs. The gym itself is well-equipped with top-notch machines and equipment, making every workout session efficient and effective. But what really sets City Gym apart is the community - it's such a positive and encouraging environment.</p>
                            <div className="five-star-container">
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                                <img className="five-star-image" src="./images/5 stars.png" alt="5 stars"></img>
                            </div>
                        </div>

                        <div className="main-testimonial-card3"></div>
                    </div>
                </div>
            </section>
        )
    }
}