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
            <div className="landing-image">
                <div className="text-flex">  
		            <h1 className="main-header-text">Sarah Vaughan<br/>Stylist</h1>
                {/* <a href="https://www.schedulicity.com/scheduling/sva6bt/services">Book Now</a> */}
                </div>
                <div className="top-button-container">
                    <button className="book-now-button top-button">Book Now!</button>
                </div>
	            </div>
            <div className="section-container">
                <div className="flex-container">
                    <div className="row">
                        <div className="column">
                            <h6 className="title">SALON ADDDRESS</h6>
                            <a id="address-link" href="https://goo.gl/maps/bbM1qXgQh6PsLhwc7" className="salon-address-text">
                                <p className="salon-address">KAYA<br/>3036 Adams Ave<br/>San Diego, CA 92116</p>
                            </a>
                        </div>
                        <div className="column">
                            <h6 className="title">PHONE</h6>
                            <p className="phone-number">619-549-8080</p>
                            <p className="email">Email</p>
                        </div>
                    </div>
                </div>
            </div>
            <ImagesSection />
            <div className="section-container">
                    <div className="row">
                        <button className="book-now-button">Book Now!</button>
                    </div>
                <div className="row">
                    <div className="column">
                        <div className="sub-section">
                            <h3 className="decorative-title">about sarah</h3>
                                <p className="about-text">For over 20 years Sarah Vaughan has been doing hair and loving it. She's worked at top salons throughout the Pacific Northwest, Honolulu and San Diego. Focusing specifically on cut and color services, she also provides smoothing treatments, extension services and perms. Sarah specializes in precision hair cutting, and has extensive training though the Vidal Sassoon and Bumble and Bumble programs.</p>
                                <p className="quote">“From classic to creative, I believe that your hair should compliment your lifestyle and personal style to help you look and feel your best.”<br/> — SARAH</p>
                        </div>
                        <div className="sub-section">
                            <h3 className="decorative-title">testimonials</h3>
                                <p className="testimonial-text">I will follow Sarah Vaughan wherever she goes. As a short hair fanatic, she is the master of the pixie and the five point.</p>
                                <p className="testimonial-name">- Roselle E.</p>
                                <p className="testimonial-text"> Sarah understands what you want. She consults really well, and makes you feel really confident leaving the salon. She knows how to balance simple and bold. You won't be disappointed</p>
                                <p className="testimonial-name">- Crystal L.</p>
                                <p className="testimonial-text">I walked out feeling like a million bucks. I won't go to anyone else from now on, she got the cut, color, and style just right!</p>
                                <p className="testimonial-name">- Lena C.</p>
                        </div>
                        <div className="sub-section">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.1021940699457!2d-117.13158618415824!3d32.763022780976286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954ffccb3aca5%3A0x85dfb94df841bf69!2sKaya+Salon!5e0!3m2!1sen!2sus!4v1556730394371!5m2!1sen!2sus" className="imbedded-map" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="sub-section">
                            <h5 className="sub-section-headline">HOURS</h5>
                                <p className="mini-title">Tuesday</p>
                                <p className="time">9am-5pm</p>
                                <p className="mini-title">Wednesday</p>
                                <p className="time">12-8pm</p>
                                <p className="mini-title">Thursday</p>
                                <p className="time">9am-5pm</p>
                                <p className="mini-title">Friday</p>
                                <p className="time">9am-5pm</p>
                                <p className="mini-title">Saturday</p>
                                <p className="time">9am-5pm</p>
                        </div>
                        <div className="sub-section">
                            <h5 className="sub-section-headline">SERVICES</h5>
                                <p className="mini-title">COLOR</p>
                                <p className="service-description">Full range of custom color services including consultation and finish styling. Highlighting, balayage, hair painting, global applications, and more.</p>
                                <p className="mini-title">CUT</p>
                                <p className="service-description">Includes consultation, shampoo and finish styling.</p>
                                <p className="mini-title">SMOOTHING TREATMENTS</p>
                                <p className="service-description">Pure Brazilian and Cezanne Professional smoothing systems.</p>
                                <p className="mini-title">EXTENSIONS</p>
                                <p className="service-description">Hot Heads and Hairlocs Hair Extension Services provided. Consultation required prior to service.</p>
                                <p className="mini-title">SPECIAL EVENT STYLING</p>
                                <p className="service-description">Weddings, special events and more. On-location or in-salon, hair styling services provided for groups or individuals.</p>
                                <p className="mini-title">CONSULTATION</p>
                                <p className="service-description">Complimentary consultations provided prior to any service or anytime!</p>
                        </div>
                        <div className="sub-section">
                            <h5 className="sub-section-headline">RATES</h5>
                                <p className="mini-title">WOMEN'S CUT</p>
                                <p className="rates-cost">$75</p>
                                <p className="mini-title">MEN'S CUT</p>
                                <p className="rates-cost">$55</p>
                                <p className="mini-title">PARTIAL HIGHLIGHT</p>
                                <p className="rates-cost">$110</p>
                                <p className="mini-title">FULL HIGHLIGHT</p>
                                <p className="rates-cost">$125</p>
                                <p className="mini-title">SINGLE PROCESS COLOR</p>
                                <p className="rates-cost">$75</p>
                                <p className="mini-title">HAIRLIOCKS / HOTHEADS EXTENSIONS</p>
                                <p className="rates-cost">Consult required for accurate rate</p>
                                <p className="mini-title">PERMS</p>
                                <p className="rates-cost">Consult required for accurate rate</p>
                        </div>
                </div>
                    </div>
                    <div className="row">
                        <button className="book-now-button button-bottom">Book Now!</button>
                    </div>
            </div>
        </React.Fragment>
        );
    }
}

export default App;