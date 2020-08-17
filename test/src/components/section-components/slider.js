import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Slider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="hero-section" id="heroSlideActive">
	  <div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/Slider1.jpg)'}}>
	    <div className="container">
	    </div>
	  </div>
	  <div className="single-hero-slide bg-img-center d-flex align-items-center text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/Slider2.jpg)'}}>
	    <div className="container">
	      <div className="slider-text">
	        <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to</span>
	        <h1 data-animation="fadeInLeft" data-delay=".6s">Luxury Living</h1>
	        
	      </div>
	    </div>
	  </div>
	</section>
    }
}

export default Slider