import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     <section className="blog-details-wrapper section-padding section-bg">
	  <div className="container">
	    <div className="row">
	      <div className="col-lg-8">
	        <div className="post-details">
	          <div className="entry-header">
	            <div className="post-thumb">
	              <img src={publicUrl+"assets/img/blog-details/01.jpg"} alt="Image" />
	            </div>
	            <ul className="entry-meta list-inline">
	              <li><a href="single-blog.html"><i className="far fa-user-alt" />Somalia Alexz</a></li>
	              <li><a href="single-blog.html"><i className="far fa-calendar-alt" />20 jan 2020</a>
	              </li>
	            </ul>
	            <h2 className="entry-title"> Taming Advanced Color Palettes In Photo Sketch And Affinity
	              Designer Challenge </h2>
	          </div>
	          <div className="entry-content">
	            <p> But we ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor
	              incididunt labore
	              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
	              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
	              reprehendermust explain to you how all this mistaken idea of denouncing pleasure and
	              praising pain was born and I will give you a complete account of the system, and
	              expound the actual teachings of the great explorer of the truth, the mas
	              ter-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
	              because it is plea
	              sure, but because those who do not know how to pursue pleasure rationally encounter
	              conse
	              quences that are extremely painful. Nor again is there anyone
	            </p>
	            <div className="entry-gallery-img">
	              <div className="row">
	                <div className="col-md-6">
	                  <figure className="entry-media-img"><img src={publicUrl+"assets/img/blog-details/02.jpg"} alt="Image" /></figure>
	                </div>
	                <div className="col-md-6">
	                  <figure className="entry-media-img"><img src={publicUrl+"assets/img/blog-details/03.jpg"} alt="Image" /></figure>
	                </div>
	              </div>
	            </div>
	            <blockquote>
	              Avoids pleasure itself because it pleasure but because those who do not know how to
	              pursue pleasure rationally encounter consequences that are extremely painful again
	              <h6 className="blockquote-v">Tony R. Francois</h6>
	            </blockquote>
	          </div>
	          <div className="entry-footer d-flex justify-content-md-between">
	            <ul className="popular-tag list-inline">
	              <li className="title">Popular Tag :</li>
	              <li><Link to="/blog-grid">Hotel,</Link></li>
	              <li><Link to="/blog-grid">Luxury,</Link></li>
	              <li><Link to="/blog-grid">Living</Link></li>
	            </ul>
	            <ul className="social-share list-inline">
	              <li className="title">Share </li>
	              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
	              <li><a href="#"><i className="fab fa-twitter" /></a></li>
	              <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
	              <li><a href="#"><i className="fab fa-instagram" /></a></li>
	            </ul>
	          </div>
	        </div>
	        <div className="post-nav">
	          <div className="row">
	            <div className="col-lg-6">
	              <div className="post-nav-box">
	                <a href="#">Building Pub Sub Service Using Node And Redis</a>
	              </div>
	            </div>
	            <div className="col-lg-6">
	              <div className="post-nav-box">
	                <a href="#">Once Upon Timey Storyis For Better Enga gement</a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <Comments />
	        <div className="comment-form">
	          <h2 className="comment-form-title">Send A Message</h2>
	          <form>
	            <div className="row">
	              <div className="col-md-6 col-12">
	                <div className="input-wrap">
	                  <input type="text" placeholder="Your Full Name" id="name" />
	                  <i className="far fa-user-alt" />
	                </div>
	              </div>
	              <div className="col-md-6 col-12">
	                <div className="input-wrap">
	                  <input type="text" placeholder="Your Email" id="email" />
	                  <i className="far fa-envelope" />
	                </div>
	              </div>
	              <div className="col-12">
	                <div className="input-wrap text-area">
	                  <textarea placeholder="Write Message" defaultValue={""} />
	                  <i className="far fa-pencil" />
	                </div>
	              </div>
	              <div className="col-12">
	                <button type="submit" className="btn filled-btn">Send Message <i className="far fa-long-arrow-right" /></button>
	              </div>
	            </div>
	          </form>
	        </div>
	      </div>
	     	<Sidebar />
	    </div>
	  </div>
	</section>

    )
  }
}

export default BlogDetails;
