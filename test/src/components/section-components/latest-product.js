import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestProduct extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="latest-product section-padding">
			  <div className="container">
			    {/* Section Title */}
			    <div className="section-title text-center">
			      <span className="title-top">Latest Product</span>
			      <h1>Modern Hotel &amp; Room For <br /> Luxury Living</h1>
			    </div>
			    <div className="row avson-go-top">
			      <div className="col-lg-4 col-md-6">
			        {/* Single feature boxes */}
			        <div className="product-box text-center">
			          <div className="product-img">
			            <img src={publicUrl+"assets/img/product/product-1.jpg"} alt="Product" />
			          </div>
			          <div className="product-content">
			            <i className="far fa-stars" />
			            <h5><Link to="/room-details">Modern Guest Rooms</Link></h5>
			            <p className="price">$180.00</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* Single feature boxes */}
			        <div className="product-box text-center">
			          <div className="product-img">
			            <img src={publicUrl+"assets/img/product/product-2.jpg"} alt="Product" />
			          </div>
			          <div className="product-content">
			            <i className="far fa-stars" />
			            <h5><Link to="/room-details">Luxury Couple Rooms</Link></h5>
			            <p className="price">$230.00</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* Single feature boxes */}
			        <div className="product-box text-center">
			          <div className="product-img">
			            <img src={publicUrl+"assets/img/product/product-3.jpg"} alt="Product" />
			          </div>
			          <div className="product-content">
			            <i className="far fa-stars" />
			            <h5><Link to="/room-details">Swimming Pool &amp; Hotel</Link></h5>
			            <p className="price">$360.00</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* Single feature boxes */}
			        <div className="product-box text-center">
			          <div className="product-img">
			            <img src={publicUrl+"assets/img/product/product-4.jpg"} alt="Product" />
			          </div>
			          <div className="product-content">
			            <i className="far fa-stars" />
			            <h5><Link to="/room-details">Family Luxury Ronoms</Link></h5>
			            <p className="price">$180.00</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* Single feature boxes */}
			        <div className="product-box text-center">
			          <div className="product-img">
			            <img src={publicUrl+"assets/img/product/product-5.jpg"} alt="Product" />
			          </div>
			          <div className="product-content">
			            <i className="far fa-stars" />
			            <h5><Link to="/room-details">Luxury Single Rooms</Link></h5>
			            <p className="price">$230.00</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        {/* Single feature boxes */}
			        <div className="product-box text-center">
			          <div className="product-img">
			            <img src={publicUrl+"assets/img/product/product-6.jpg"} alt="Product" />
			          </div>
			          <div className="product-content">
			            <i className="far fa-stars" />
			            <h5><Link to="/room-details">Twieen Couple Rooms</Link></h5>
			            <p className="price">$360.00</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* Design Shape */}
			  <div className="shape-one">
			    <img src={publicUrl+"assets/img/shape/08.png"} alt="Shape" />
			  </div>
			  <div className="shape-two">
			    <img src={publicUrl+"assets/img/shape/03.png"} alt="Shape" />
			  </div>
			  <div className="shape-three">
			  </div>
			</section>


        }
}

export default LatestProduct