import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestBlog extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
       

    return  <section className="latest-blog section-padding section-bg avson-go-top">
			  <div className="container">
			    {/* Section Title */}
			    <div className="section-title text-center">
			      <span className="title-top">Why Choose Us</span>
			      <h1>Since1990 We Provides <br /> Professional Service</h1>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-md-6 col-sm-6 order-lg-1 order-sm-2">
			        <div className="single-latest-post  wow fadeIn  animated" data-wow-duration="1500ms" data-wow-delay="400ms">
			          <div className="post-img">
			            <img src={publicUrl+"assets/img/recent-post/03.jpg"} alt="Post Image" />
			          </div>
			          <div className="latest-post-desc">
			            <span className="post-date"><i className="far fa-calendar-alt" />20 Jan 2020</span>
			            <h6><Link to="/blog-details">CSS Grid Challenge Build A Template, Win Some Smashing
			                Prizes!</Link></h6>
			            <Link to="/blog-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 order-lg-2 order-sm-1">
			        <div className="single-latest-post big-post wow fadeInUp  animated" data-wow-duration="1500ms" data-wow-delay="600ms">
			          <div className="post-img">
			            <img src={publicUrl+"assets/img/recent-post/04.jpg"} alt="Post Image" />
			          </div>
			          <div className="latest-post-desc">
			            <span className="post-date"><i className="far fa-calendar-alt" />20 Jan 2020</span>
			            <h6><Link to="/blog-details">Goodbye Summer Autumn! Inspiring Wallpaper Start September
			                Right Introduction Gravit Desig Designing A Weather App (Part 2)</Link></h6>
			            <Link to="/blog-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6 col-sm-6 order-sm-3">
			        <div className="single-latest-post wow fadeIn  animated" data-wow-duration="1500ms" data-wow-delay="800ms">
			          <div className="post-img">
			            <img src={publicUrl+"assets/img/recent-post/05.jpg"} alt="Post Image" />
			          </div>
			          <div className="latest-post-desc">
			            <span className="post-date"><i className="far fa-calendar-alt" />20 Jan 2020</span>
			            <h6><Link to="/blog-details">Meet Respond Test Tool Let’s Make Building Respo Nsive
			                Website Simpler</Link></h6>
			            <Link to="/blog-details" className="read-more">raed more <i className="far fa-long-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default LatestBlog