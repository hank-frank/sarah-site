import React, { Component } from 'react';

import ImagesSection from "./ImagesSection.jsx"

class App extends Component {
    constructor() {
        super();

        this.state = {
            
        };
    }
    render() {
        return (
        <React.Fragment>
            <div className="section-container">
                <div className="flex-container">
                    <div className="row">
                        <div className="column">
                            <h6 className="salon-address-title">Salon address</h6>
                                <a href="https://goo.gl/maps/bbM1qXgQh6PsLhwc7" className="salon-address-text">KAYA<br/>3036 Adams Ave<br/>San Diego, CA 92116></a>
                        </div>
                        <div className="column">
                            <h6 className="phone-title">Phone</h6>
                            <p className="phone-number">619-549-8080</p>
                            <p className="email">Email</p>
                        </div>
                    </div>
                    <div className="row">
                        <button className="book-now-button">Book Now!</button>
                    </div>
                </div>
            </div>
            <ImagesSection />
            <div className="section-container">
                <div className="row">
                    <div className="column">
                        <h3 className="section-title">about sarah</h3>
                        <p className="about-text">For over 20 years Sarah Vaughan has been doing hair and loving it. She's worked at top salons throughout the Pacific Northwest, Honolulu and San Diego. Focusing specifically on cut and color services, she also provides smoothing treatments, extension services and perms. Sarah specializes in precision hair cutting, and has extensive training though the Vidal Sassoon and Bumble and Bumble programs.</p>
                        <p className="quote">“From classic to creative, I believe that your hair should compliment your lifestyle and personal style to help you look and feel your best.” — SARAH</p>
                        <h3 className="section-title">testimonials</h3>
                        <p className="testimonial-text">I will follow Sarah Vaughan wherever she goes. As a short hair fanatic, she is the master of the pixie and the five point.</p>
                        <p className="testimonial-name">- Roselle E.</p>
                        <p className="testimonial-text"> Sarah understands what you want. She consults really well, and makes you feel really confident leaving the salon. She knows how to balance simple and bold. You won't be disappointed</p>
                        <p className="testimonial-name">- Crystal L.</p>
                        <p className="testimonial-text">I walked out feeling like a million bucks. I won't go to anyone else from now on, she got the cut, color, and style just right!</p>
                        <p className="testimonial-name">- Lena C.</p>
                    </div>
                    <div className="column">
                        <div className="sub-section">
                            <h5 className="sub-section-headline">HOURS</h5>
                            <p className="day">Tuesday</p>
                            <p className="ime">9am-5pm</p>
                            <p className="day">Wednesday</p>
                            <p className="ime">12-8pm</p>
                            <p className="day">Thursday</p>
                            <p className="ime">9am-5pm</p>
                            <p className="day">Friday</p>
                            <p className="ime">9am-5pm</p>
                            <p className="day">Saturday</p>
                            <p className="ime">9am-5pm</p>
                        </div>
                        <div className="sub-section">
                            <h5 className="sub-section-headline">Services</h5>
                            <p className="service-title">COLOR</p>
                            <p className="service-description">Full range of custom color services including consultation and finish styling. Highlighting, balayage, hair painting, global applications, and more.</p>
                            <p className="service-title">CUT</p>
                            <p className="service-description">Includes consultation, shampoo and finish styling.</p>
                            <p className="service-title">SMOOTHING TREATMENTS</p>
                            <p className="service-description">Pure Brazilian and Cezanne Professional smoothing systems.</p>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default App;