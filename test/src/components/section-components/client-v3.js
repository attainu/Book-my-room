import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="about-page">

		    <section className="feedback-section section-padding section-bg">
				  <div className="container">
				    {/* Section Title */}
				    <div className="section-title text-center">
				      <span className="title-top">Clients Feedback</span>
				      <h1>Our Satisfaction People Say <br /> About Our Services </h1>
				    </div>
				    <div className="feadback-slide row" id="feedbackSlideActive">
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset
				            arerum
				            neces tibus saep on ways feels like ways.</p>
				          <h5 className="feedback-author">James M. Varney</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>At vero eos et accusamu way set iusto odio dignis ducimus qui bpraes enum voluptatum
				            deleniti
				            atque corrupti quos dolores others worlds.</p>
				          <h5 className="feedback-author">David K. Vinson</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset
				            arerum
				            neces tibus saep on ways feels like ways.</p>
				          <h5 className="feedback-author">James M. Varney</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>At vero eos et accusamu way set iusto odio dignis ducimus qui bpraes enum voluptatum
				            deleniti
				            atque corrupti quos dolores others worlds.</p>
				          <h5 className="feedback-author">David K. Vinson</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset
				            arerum
				            neces tibus saep on ways feels like ways.</p>
				          <h5 className="feedback-author">James M. Varney</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>At vero eos et accusamu way set iusto odio dignis ducimus qui bpraes enum voluptatum
				            deleniti
				            atque corrupti quos dolores others worlds.</p>
				          <h5 className="feedback-author">David K. Vinson</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset
				            arerum
				            neces tibus saep on ways feels like ways.</p>
				          <h5 className="feedback-author">James M. Varney</h5>
				        </div>
				      </div>
				      <div className="col-lg-6">
				        <div className="single-feedback-box">
				          <p>At vero eos et accusamu way set iusto odio dignis ducimus qui bpraes enum voluptatum
				            deleniti
				            atque corrupti quos dolores others worlds.</p>
				          <h5 className="feedback-author">David K. Vinson</h5>
				        </div>
				      </div>
				    </div>
				  </div>
				</section>

		   </div>

        }
}

export default FeaturesV4