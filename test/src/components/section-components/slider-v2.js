import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SliderV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="hero-section slider-two" id="secondSlider">
		  <div className="single-hero-slide bg-img-center d-flex align-items-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-2.jpg)'}}>
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-7 col-md-10">
		          <div className="slider-text">
		            <h1 data-animation="fadeInDown" data-delay=".3s">Luxury Hotel <br /> &amp; Room Service <br />
		              Agency</h1>
		            <p data-animation="fadeInLeft" data-delay=".5s">Desires to obtain pain of itself,
		              because it is pain, but because occacu stances
		              occur in which toil and pain can procure him some here ways. </p>
		            <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".8s">get
		              started <i className="far fa-long-arrow-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="single-hero-slide bg-img-center d-flex align-items-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-3.jpg)'}}>
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-7 col-md-10">
		          <div className="slider-text">
		            <h1 data-animation="fadeInDown" data-delay=".3s">Luxury Hotel <br /> &amp; Room Service <br />
		              Agency</h1>
		            <p data-animation="fadeInLeft" data-delay=".5s">Desires to obtain pain of itself,
		              because it is pain, but because occacu stances
		              occur in which toil and pain can procure him some here ways. </p>
		            <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".8s">get
		              started <i className="far fa-long-arrow-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="single-hero-slide bg-img-center d-flex align-items-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-4.jpg)'}}>
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-7 col-md-10">
		          <div className="slider-text">
		            <h1 data-animation="fadeInDown" data-delay=".3s">Luxury Hotel <br /> &amp; Room Service <br />
		              Agency</h1>
		            <p data-animation="fadeInLeft" data-delay=".5s">Desires to obtain pain of itself,
		              because it is pain, but because occacu stances
		              occur in which toil and pain can procure him some here ways. </p>
		            <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".8s">get
		              started <i className="far fa-long-arrow-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="single-hero-slide bg-img-center d-flex align-items-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/hero-bg-1.jpg)'}}>
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-7 col-md-10">
		          <div className="slider-text">
		            <h1 data-animation="fadeInDown" data-delay=".3s">Luxury Hotel <br /> &amp; Room Service <br />
		              Agency</h1>
		            <p data-animation="fadeInLeft" data-delay=".5s">Desires to obtain pain of itself,
		              because it is pain, but because occacu stances
		              occur in which toil and pain can procure him some here ways. </p>
		            <Link className="btn filled-btn" to="/service" data-animation="fadeInUp" data-delay=".8s">get
		              started <i className="far fa-long-arrow-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default SliderV2