import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="ma-gallery-section section-padding avson-go-top">
		  <div className="container">
		    {/* Section Title */}
		    <div className="section-title text-center">
		      <span className="title-top">Our Project</span>
		      <h1>Let’s See Luxury Property <br /> Insides Beautys </h1>
		    </div>
		    {/* Gallery Start */}
		    <div className="row">
		      <div className="col-lg-6">
		        {/* SingleBox */}
		        <div className="gallery-box bg-img-center big wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="0ms" style={{backgroundImage: 'url('+publicUrl+'assets/img/home-gallery/01.jpg)'}}>
		          <div className="gallery-box-content">
		            <Link to="/room-details" className="view-more">
		              <i className="far fa-plus" />
		            </Link>
		            <h3>Deluxe Rooms</h3>
		            <p>Couple Room Deluxe</p>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="row">
		          <div className="col-lg-8 col-md-6">
		            {/* SingleBox */}
		            <div className="gallery-box bg-img-center semi-big wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="400ms" style={{backgroundImage: 'url('+publicUrl+'assets/img/home-gallery/02.jpg)'}}>
		              <div className="gallery-box-content">
		                <Link to="/room-details" className="view-more">
		                  <i className="far fa-plus" />
		                </Link>
		                <h3>Deluxe Rooms</h3>
		                <p>Couple Room Deluxe</p>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6">
		            {/* SingleBox */}
		            <div className="gallery-box bg-img-center small wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="800ms" style={{backgroundImage: 'url('+publicUrl+'assets/img/home-gallery/03.jpg)'}}>
		              <div className="gallery-box-content">
		                <Link to="/room-details" className="view-more">
		                  <i className="far fa-plus" />
		                </Link>
		                <h3>Deluxe Rooms</h3>
		                <p>Couple Room Deluxe</p>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            {/* SingleBox */}
		            <div className="gallery-box bg-img-center medium wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="1200ms" style={{backgroundImage: 'url('+publicUrl+'assets/img/home-gallery/04.jpg)'}}>
		              <div className="gallery-box-content">
		                <Link to="/room-details" className="view-more">
		                  <i className="far fa-plus" />
		                </Link>
		                <h3>Deluxe Rooms</h3>
		                <p>Couple Room Deluxe</p>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            {/* SingleBox */}
		            <div className="gallery-box bg-img-center medium wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="1600ms" style={{backgroundImage: 'url('+publicUrl+'assets/img/home-gallery/05.jpg)'}}>
		              <div className="gallery-box-content">
		                <Link to="/room-details" className="view-more">
		                  <i className="far fa-plus" />
		                </Link>
		                <h3>Deluxe Rooms</h3>
		                <p>Couple Room Deluxe</p>
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

export default Gallery