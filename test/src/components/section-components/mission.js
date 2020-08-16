import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Mission extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="our-mission section-padding">
			  <div className="container">
			    <div className="section-title text-center">
			      <span className="title-top">Our Mission</span>
			      <h1>Modern Hotel &amp; Room For <br /> Luxury Living </h1>
			    </div>
			    <div className="row avson-go-top">
			      <div className="col-lg-4 col-md-6">
			        <div className="mission-box">
			          <div className="mission-bg bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/about/02.jpg)'}} />
			          <div className="mission-desc">
			            <h4>Company Mission</h4>
			            <p>Sedut perspiciatis unde omnis iste natu error
			              sit voluptatem accusantium doloremque laudti
			              um totam rem aperiam eaque quae</p>
			            <Link to="/service" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="mission-box">
			          <div className="mission-bg bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/about/03.jpg)'}} />
			          <div className="mission-desc">
			            <h4>Company History</h4>
			            <p>Sedut perspiciatis unde omnis iste natu error
			              sit voluptatem accusantium doloremque laudti
			              um totam rem aperiam eaque quae</p>
			            <Link to="/service" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6 mx-auto">
			        <div className="mission-box">
			          <div className="mission-bg bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/about/04.jpg)'}} />
			          <div className="mission-desc">
			            <h4>What We Do?</h4>
			            <p>Sedut perspiciatis unde omnis iste natu error
			              sit voluptatem accusantium doloremque laudti
			              um totam rem aperiam eaque quae</p>
			            <Link to="/service" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default Mission