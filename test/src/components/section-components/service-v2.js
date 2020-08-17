import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="service-section section-padding section-bg avson-go-top">
			  <div className="container">
			    {/* Section Title */}
			    <div className="section-title text-center">
			      <span className="title-top">Our Services</span>
			      <h1>We Provide Most Exclusive <br /> Hotel &amp; Room Services </h1>
			    </div>
			    {/* Service Boxes */}
			    <div className="row">
			      <div className="col-lg-4 col-md-6">
			        {/* SingleBox */}
			        <div className="single-service-box service-white-bg text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="400ms">
			          <span className="service-counter">01</span>
			          <div className="service-icon">
			            <img src={publicUrl+"assets/img/icons/01.png"} alt="Icon" className="first-icon" />
			            <img src={publicUrl+"assets/img/icons/01-hover.png"} alt="Hover Icon" className="second-icon" />
			          </div>
			          <h4>Rooms &amp; Appartment</h4>
			          <p>Great explorer of the truth the ter-blde human happiness one reject</p>
			          <Link to="/room-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* SingleBox */}
			        <div className="single-service-box service-white-bg text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="500ms">
			          <span className="service-counter">02</span>
			          <div className="service-icon">
			            <img src={publicUrl+"assets/img/icons/02.png"} alt="Icon" className="first-icon" />
			            <img src={publicUrl+"assets/img/icons/02-hover.png"} alt="Hover Icon" className="second-icon" />
			          </div>
			          <h4>Food &amp; Restaurant</h4>
			          <p>Great explorer of the truth the ter-blde human happiness one reject</p>
			          <Link to="/room-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* SingleBox */}
			        <div className="single-service-box service-white-bg text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="600ms">
			          <span className="service-counter">03</span>
			          <div className="service-icon">
			            <img src={publicUrl+"assets/img/icons/03.png"} alt="Icon" className="first-icon" />
			            <img src={publicUrl+"assets/img/icons/03-hover.png"} alt="Hover Icon" className="second-icon" />
			          </div>
			          <h4>Spa &amp; Fitness</h4>
			          <p>Great explorer of the truth the ter-blde human happiness one reject</p>
			          <Link to="/room-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* SingleBox */}
			        <div className="single-service-box service-white-bg text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="700ms">
			          <span className="service-counter">04</span>
			          <div className="service-icon">
			            <img src={publicUrl+"assets/img/icons/04.png"} alt="Icon" className="first-icon" />
			            <img src={publicUrl+"assets/img/icons/04-hover.png"} alt="Hover Icon" className="second-icon" />
			          </div>
			          <h4>Sports &amp; Gaming</h4>
			          <p>Great explorer of the truth the ter-blde human happiness one reject</p>
			          <Link to="/room-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* SingleBox */}
			        <div className="single-service-box service-white-bg text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="800ms">
			          <span className="service-counter">05</span>
			          <div className="service-icon">
			            <img src={publicUrl+"assets/img/icons/05.png"} alt="Icon" className="first-icon" />
			            <img src={publicUrl+"assets/img/icons/05-hover.png"} alt="Hover Icon" className="second-icon" />
			          </div>
			          <h4>Event &amp; Party</h4>
			          <p>Great explorer of the truth the ter-blde human happiness one reject</p>
			          <Link to="/room-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* SingleBox */}
			        <div className="single-service-box service-white-bg text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="900ms">
			          <span className="service-counter">06</span>
			          <div className="service-icon">
			            <img src={publicUrl+"assets/img/icons/06.png"} alt="Icon" className="first-icon" />
			            <img src={publicUrl+"assets/img/icons/06-hover.png"} alt="Hover Icon" className="second-icon" />
			          </div>
			          <h4>GYM &amp; Yoga</h4>
			          <p>Great explorer of the truth the ter-blde human happiness one reject</p>
			          <Link to="/room-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>


        }
}

export default ServiceV2