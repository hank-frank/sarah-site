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
            <div class="section-container landing-image">
		        <h1 className="main-header-text">Sarah Vaughan<br/>Stylist</h1>
		        <a href="https://www.schedulicity.com/scheduling/sva6bt/services">Book Now</a>
	        </div>
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
                        <div className="sub-sectoin">
                            <h3 className="section-title">about sarah</h3>
                                <p className="about-text">For over 20 years Sarah Vaughan has been doing hair and loving it. She's worked at top salons throughout the Pacific Northwest, Honolulu and San Diego. Focusing specifically on cut and color services, she also provides smoothing treatments, extension services and perms. Sarah specializes in precision hair cutting, and has extensive training though the Vidal Sassoon and Bumble and Bumble programs.</p>
                                <p className="quote">“From classic to creative, I believe that your hair should compliment your lifestyle and personal style to help you look and feel your best.” — SARAH</p>
                        </div>
                        <div className="sub-sectoin">
                            <h3 className="section-title">testimonials</h3>
                                <p className="testimonial-text">I will follow Sarah Vaughan wherever she goes. As a short hair fanatic, she is the master of the pixie and the five point.</p>
                                <p className="testimonial-name">- Roselle E.</p>
                                <p className="testimonial-text"> Sarah understands what you want. She consults really well, and makes you feel really confident leaving the salon. She knows how to balance simple and bold. You won't be disappointed</p>
                                <p className="testimonial-name">- Crystal L.</p>
                                <p className="testimonial-text">I walked out feeling like a million bucks. I won't go to anyone else from now on, she got the cut, color, and style just right!</p>
                                <p className="testimonial-name">- Lena C.</p>
                        </div>
                        <div className="sub-sectoin">
                            <p id="address-above-map">
                                KAYA<br/>3036 Adams Ave<br/>
                                San Diego, CA 92116 </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.1021940699457!2d-117.13158618415824!3d32.763022780976286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954ffccb3aca5%3A0x85dfb94df841bf69!2sKaya+Salon!5e0!3m2!1sen!2sus!4v1556730394371!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen />
                        </div>
                    </div>
                    <div className="column">
                        <div className="sub-section">
                            <h5 className="sub-section-headline">HOURS</h5>
                                <p className="day">Tuesday</p>
                                <p className="time">9am-5pm</p>
                                <p className="day">Wednesday</p>
                                <p className="time">12-8pm</p>
                                <p className="day">Thursday</p>
                                <p className="time">9am-5pm</p>
                                <p className="day">Friday</p>
                                <p className="time">9am-5pm</p>
                                <p className="day">Saturday</p>
                                <p className="time">9am-5pm</p>
                        </div>
                        <div className="sub-section">
                            <h5 className="sub-section-headline">SERVICES</h5>
                                <p className="service-title">COLOR</p>
                                <p className="service-description">Full range of custom color services including consultation and finish styling. Highlighting, balayage, hair painting, global applications, and more.</p>
                                <p className="service-title">CUT</p>
                                <p className="service-description">Includes consultation, shampoo and finish styling.</p>
                                <p className="service-title">SMOOTHING TREATMENTS</p>
                                <p className="service-description">Pure Brazilian and Cezanne Professional smoothing systems.</p>
                                <p className="service-title">EXTENSIONS</p>
                                <p className="services-description">Hot Heads and Hairlocs Hair Extension Services provided. Consultation required prior to service.</p>
                                <p className="service-title">SPECIAL EVENT STYLING</p>
                                <p className="service-description">Weddings, special events and more. On-location or in-salon, hair styling services provided for groups or individuals.</p>
                                <p className="service-title">CONSULTATION</p>
                                <p className="service-description">Complimentary consultations provided prior to any service or anytime!</p>
                        </div>
                        <div className="sub-section">
                            <h5 className="sub-section-headline">RATES</h5>
                                <p className="rates-title">WOMEN'S CUT</p>
                                <p className="rates-cost">$75</p>
                                <p className="rates-title">MEN'S CUT</p>
                                <p className="rates-cost">$55</p>
                                <p className="rates-title">PARTIAL HIGHLIGHT</p>
                                <p className="rates-cost">$110</p>
                                <p className="rates-title">FULL HIGHLIGHT</p>
                                <p className="rates-cost">$125</p>
                                <p className="rates-title">SINGLE PROCESS COLOR</p>
                                <p className="rates-cost">$75</p>
                                <p className="rates-title">HAIRLIOCKS / HOTHEADS EXTENSIONS</p>
                                <p className="rates-cost">Consult required for accurate rate</p>
                                <p className="rates-title">PERMS</p>
                                <p className="rates-cost">Consult required for accurate rate</p>
                        </div>
                        <button className="book-now-button">Book Now!</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default App;