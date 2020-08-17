import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="feature-section section-padding pt-0">
		  <div className="container">
		    {/* Section Title */}
		    <div className="section-title text-center">
		      <span className="title-top">Popular Features</span>
		      <h1>Explore Our Hotels Benefits <br /> Why Take Our Services?</h1>
		    </div>
		    <div className="row avson-go-top">
		      <div className="col-lg-4 col-md-6">
		        {/* Single feature boxes */}
		        <div className="single-feature-box text-center wow fadeIn  animated" data-wow-duration="1500ms" data-wow-delay="400ms">
		          <div className="feature-icon">
		            <img src={publicUrl+"assets/img/icons/icon.png"} alt="Icon" />
		          </div>
		          <h4>Free Transportation</h4>
		          <p>Has any right to find fault with man who chooses to enjoy a pleasure that has no annoying
		            conseque</p>
		          <Link to="/service" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        {/* Single feature boxes */}
		        <div className="single-feature-box text-center wow fadeIn  animated" data-wow-duration="1500ms" data-wow-delay="600ms">
		          <div className="feature-icon">
		            <img src={publicUrl+"assets/img/icons/icon-2.png"} alt={ imagealt } />
		          </div>
		          <h4>Food &amp; Drinks</h4>
		          <p>Has any right to find fault with man who chooses to enjoy a pleasure that has no annoying
		            conseque</p>
		          <Link to="/service" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6 mx-auto">
		        {/* Single feature boxes */}
		        <div className="single-feature-box text-center wow fadeIn  animated" data-wow-duration="1500ms" data-wow-delay="800ms">
		          <div className="feature-icon">
		            <img src={publicUrl+"assets/img/icons/icon-3.png"} alt="Icon" />
		          </div>
		          <h4>Free Wi-fi Network</h4>
		          <p>Has any right to find fault with man who chooses to enjoy a pleasure that has no annoying
		            conseque</p>
		          <Link to="/service" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default FeaturesV3