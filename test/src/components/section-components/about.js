import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="about-site section-padding">
			  <div className="container">
			    {/* Section Title Start */}
			    <div className="row">
			      <div className="col-md-6">
			        <div className="section-title text-right">
			          <span className="title-top with-border">About Us</span>
			          <h1>Welcome To Avson <br /> Modern Hotel Room <br /> Sells Services</h1>
			        </div>
			      </div>
			      <div className="col-md-6">
			        <p className="mb-30">
			          But I must explain you how all this mistaken idea denounci pleasure and praising pain was
			          born and I will give you a comount of the system, and expound the actual teachin
			          reatexplorer of the truth, theter-builder of human happiness one rejdislikes, or avoids
			          pleasure itself
			        </p>
			        <p>
			          Will give you a comount of the system, and expound the actual teachin reatexplorer of the
			          truth, theter-builder of human happiness
			        </p>
			      </div>
			    </div>
			    {/* Section Title End */}
			    <div className="about-img bg-image-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/about/01.jpg)'}} />
			    <div className="row no-gutters">
			      <div className="offset-xl-1 col-xl-5 col-md-6">
			        <div className="about-text-box section-bg">
			          <h2>An Professional Hotel, Living Service Provider Company</h2>
			          <p>But must explain you how all this mistaken idea deno
			            asure and praising pain was born and will give comous
			            of the system, and expound the actual teachin reatexp
			            lorer of the truth, theter-builder human happine one
			            rejdislikes, or avoids pleasure itself</p>
			          <a href="#" className="btn filled-btn">Get Started <i className="far fa-long-arrow-right" /></a>
			        </div>
			      </div>
			      <div className="offset-lg-1 col-lg-5 col-md-6">
			        <div className="counter">
			          <div className="row">
			            <div className="col-6">
			              <div className="counter-box">
			                <img src="assets/img/icons/building.png" alt="" />
			                <span className="counter-number">506</span>
			                <p>Luxury Appartment</p>
			              </div>
			            </div>
			            <div className="col-6">
			              <div className="counter-box">
			                <img src="assets/img/icons/trophy.png" alt="" />
			                <span className="counter-number">420</span>
			                <p>Win Int Awards</p>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>


        }
}

export default AboutPage