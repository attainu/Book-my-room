import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {


    return <section className="contact-info-section">
			  <div className="container">
			    {/* Section Title Start */}
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="section-title">
			          <span className="title-top">Have A Coffee</span>
			          <h1>Don't Hesitate To <br /> Contact Us</h1>
			        </div>
			      </div>
			      <div className="col-lg-7">
			        <p>
			          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
			          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
			          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
			          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
			          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
			        </p>
			      </div>
			    </div>
			    {/* Section Title End */}
			    <div className="contact-info-boxes">
			      <div className="row">
			        <div className="col-lg-4 col-md-6">
			          <div className="contact-info-box">
			            <div className="contact-icon">
			              <i className="far fa-map-marker-alt" />
			            </div>
			            <h4>Address</h4>
			            <p>GymVast, 18 East 50th Street,</p>
			            <p> 4th Floor, 205 Main Road,Delhi</p>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6">
			          <div className="contact-info-box">
			            <div className="contact-icon">
			              <i className="far fa-envelope-open" />
			            </div>
			            <h4>Address</h4>
			            <p><a href="#">support@gmail.com</a></p>
			            <p><a href="#">www.BookMyHotel.com </a></p>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6 mx-auto">
			          <div className="contact-info-box">
			            <div className="contact-icon">
			              <i className="far fa-phone" />
			            </div>
			            <h4>Phone Us</h4>
			            <p>+0123 (456) 7899</p>
			            <p>+1234567899</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default ContactInfo