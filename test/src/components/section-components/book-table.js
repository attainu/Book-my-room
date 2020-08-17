import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BookTable extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="reserv-form-section section-padding">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-5">
			        {/* Section Title */}
			        <div className="section-title book-table-desc">
			          <span className="title-top">Book Your Table</span>
			          <h1>Reservation</h1>
			          <p>
			            But I must explain to you how all this mistaken idea denouncing pleasure and praising
			            pain was born and I will give you a complete account of the system, and expound the
			            actual teachings of the great explorer of the truth, the master-builder of human
			            hapness. No one rejects dislikes or avoids pleasure itself
			          </p>
			          <a href="contact.html" className="read-more">Get Started <i className="far fa-long-arrow-right" /></a>
			          <div className="book-table-img">
			            <img src={publicUrl+"assets/img/reservation/03.jpg"} alt="Image" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-5 col-md-7 offset-lg-1">
			        <div className="booking-form-wrap">
			          <h2 className="b-form-title">Book A Table</h2>
			          <div className="b-form section-bg">
			            <form>
			              <label htmlFor="name">Your Full Name</label>
			              <div className="input-wrap">
			                <input type="text" placeholder="Your Full Name" name="name" id="name" />
			                <i className="far fa-user-alt" />
			              </div>
			              <label htmlFor="email">Your Email Address</label>
			              <div className="input-wrap">
			                <input type="text" placeholder="Your Email" name="email" id="email" />
			                <i className="far fa-envelope" />
			              </div>
			              <label htmlFor="msg">Write Message</label>
			              <div className="input-wrap text-area">
			                <textarea placeholder="Write Message" id="msg"  name="msg" defaultValue={""} />
			                <i className="far fa-pencil" />
			              </div>
			              <button type="submit" className="btn filled-btn">Book Now <i className="far fa-long-arrow-right" /></button>
			            </form>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default BookTable