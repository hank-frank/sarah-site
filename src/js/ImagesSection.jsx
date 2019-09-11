import React, { Component } from 'react';

class ImagesSection extends Component {
    constructor() {
        super();

        this.state = {
            
        };
        
    };

    
        render () {
            return (
                <React.Fragment>
                    <div className="img-flex-container">
                        <img className='hair-img' src={require('../assets/hair-img-1.jpg')} />
                        <img className='hair-img' src={require('../assets/hair-img-2.jpg')} />
                        <img className='hair-img' src={require('../assets/hair-img-3.jpg')} />
                        <img className='hair-img' src={require('../assets/hair-img-4.jpg')} />
                        <img className='hair-img' src={require('../assets/hair-img-5.jpg')} />
                        <img className='hair-img' src={require('../assets/hair-img-6.jpg')} />
                        <img className='hair-img' src={require('../assets/hair-img-7.jpg')} />
                        {/* <img className='hair-img' src={require('../assets/hair12.jpg')} /> */}
                        {/* <img className='hair-img' src={require('../assets/hair17.jpg')} /> */}
                        <img className='hair-img' src={require('../assets/hair38.jpg')} />
                        <img className='hair-img' src={require('../assets/hair39.jpg')} />
                        <img className='hair-img' src={require('../assets/hair42.jpg')} />
                        <img className='hair-img' src={require('../assets/hair47.jpg')} />
                        <img className='hair-img' src={require('../assets/Kaya+Interior2.jpg')} />
                    </div>
                </React.Fragment>
                )
            };
};

    export default ImagesSection;