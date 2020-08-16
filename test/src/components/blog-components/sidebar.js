import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
      <div className="col-lg-4">
	        {/* Sidebars Area */}
	        <div className="sidebar-wrap">
	          <div className="widget search-widget">
	            <h4 className="widget-title">Search Here</h4>
	            <form>
	              <input type="text" placeholder="Seacrh Keywords" />
	              <button><i className="far fa-search" /></button>
	            </form>
	          </div>
	          <div className="widget recent-news avson-go-top">
	            <h4 className="widget-title">Latest News</h4>
	            <ul>
	              <li>
	                <div className="recent-post-img">
	                  <img src={publicUrl+"assets/img/blog/rp01.jpg"} alt="Image" />
	                </div>
	                <div className="recent-post-desc">
	                  <h6><Link to="/blog-details">Quick Win For Impre Perfor Securitys</Link>. </h6>
	                  <span className="date">05 Feb 2020</span>
	                </div>
	              </li>
	              <li>
	                <div className="recent-post-img">
	                  <img src={publicUrl+"assets/img/blog/rp02.jpg"} alt="Image" />
	                </div>
	                <div className="recent-post-desc">
	                  <h6><Link to="/blog-details">Quick Win Imperfora Security Web ses.</Link> </h6>
	                  <span className="date">05 Feb 2020</span>
	                </div>
	              </li>
	              <li>
	                <div className="recent-post-img">
	                  <img src={publicUrl+"assets/img/blog/rp03.jpg"} alt="Image" />
	                </div>
	                <div className="recent-post-desc">
	                  <h6><Link to="/blog-details">We’ve Got Announce ment Make Rachel</Link></h6>
	                  <span className="date">05 Feb 2020</span>
	                </div>
	              </li>
	            </ul>
	          </div>
	          <div className="widget category-widget">
	            <h4 className="widget-title">Gategory</h4>
	            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/cat-01.jpg)'}}>
	              <Link to="/blog-grid">Luxury Room</Link>
	            </div>
	            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/cat-02.jpg)'}}>
	              <Link to="/blog-grid">Couple Room</Link>
	            </div>
	            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/cat-03.jpg)'}}>
	              <Link to="/blog-grid">Hotel Views</Link>
	            </div>
	          </div>
	          <div className="widget popular-tag avson-go-top">
	            <h4 className="widget-title">Populer Tag</h4>
	            <div className="tag-wrap">
	              <Link to="/blog-grid">Cleaning</Link>
	              <Link to="/blog-grid">Business</Link>
	              <Link to="/blog-grid">Booking</Link>
	              <Link to="/blog-grid">Car</Link>
	              <Link to="/blog-grid">House</Link>
	              <Link to="/blog-grid">Apartment</Link>
	              <Link to="/blog-grid">Washing</Link>
	              <Link to="/blog-grid">Agency</Link>
	              <Link to="/blog-grid">Listing</Link>
	            </div>
	          </div>
	          <div className="widget banner-widget avson-go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/sidebar-banner.jpg)'}}>
	            <h2>Booking Your Latest apartment</h2>
	            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor
	              incididunt ut labore </p>
	            <Link to="/room-details" className="btn filled-btn">BOOK NOW <i className="far fa-long-arrow-right" /></Link>
	          </div>
	        </div>
	      </div>
    )
  }
}

export default Sidebar;
