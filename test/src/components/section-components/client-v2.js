import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ClientV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="feedback-section-two section-padding">
		  <div className="container">
		    {/* Section Title */}
		    <div className="section-title text-center">
		      <span className="title-top">Clients Feedback</span>
		      <h1>Our Satisfaction People Say <br /> About Our Services</h1>
		    </div>
		    <div className="feedback-slider-two" id="feedSliderTWo">
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-01.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>David K. Vinson</h3>
		                  <span className="client-job">Business Manager</span>
		                </div>
		              </div>
		              <p>At vero eos accusamuset iusto odio dignissimos ducimus qui bpraes enum voluptatum
		                deleniti atque corruptiesc quos dolores take a trivial examplest which of us
		                ever undertakes laborious physical exercise except tobtain.</p>
		              <p>Enum voluptatum deleniti atruptiesc quos dolores take a trivial exam</p>
		              <span className="quote-icon"><img src={publicUrl+"assets/img/icons/quote.png"} alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-01.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>David K. Vinson</h3>
		                  <span className="client-job">Business Manager</span>
		                </div>
		              </div>
		              <p>At vero eos accusamuset iusto odio dignissimos ducimus qui bpraes enum voluptatum
		                deleniti atque corruptiesc quos dolores take a trivial examplest which of us
		                ever undertakes laborious physical exercise except tobtain.</p>
		              <p>Enum voluptatum deleniti atruptiesc quos dolores take a trivial exam</p>
		              <span className="quote-icon"><img src="assets/img/icons/quote.png" alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-01.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>David K. Vinson</h3>
		                  <span className="client-job">Business Manager</span>
		                </div>
		              </div>
		              <p>At vero eos accusamuset iusto odio dignissimos ducimus qui bpraes enum voluptatum
		                deleniti atque corruptiesc quos dolores take a trivial examplest which of us
		                ever undertakes laborious physical exercise except tobtain.</p>
		              <p>Enum voluptatum deleniti atruptiesc quos dolores take a trivial exam</p>
		              <span className="quote-icon"><img src="assets/img/icons/quote.png" alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="single-feedback-slide">
		        <div className="row">
		          <div className="col-lg-6">
		            <div className="client-big-img">
		              <img src={publicUrl+"assets/img/man-image/01.jpg"} alt="Clients" />
		            </div>
		          </div>
		          <div className="col-lg-5 offset-lg-1">
		            <div className="feedback-desc">
		              <div className="feedback-client-desc d-flex align-items-center">
		                <div className="client-img">
		                  <img src={publicUrl+"assets/img/man-image/man-small-01.png"} alt="Clients" />
		                </div>
		                <div className="client-name">
		                  <h3>David K. Vinson</h3>
		                  <span className="client-job">Business Manager</span>
		                </div>
		              </div>
		              <p>At vero eos accusamuset iusto odio dignissimos ducimus qui bpraes enum voluptatum
		                deleniti atque corruptiesc quos dolores take a trivial examplest which of us
		                ever undertakes laborious physical exercise except tobtain.</p>
		              <p>Enum voluptatum deleniti atruptiesc quos dolores take a trivial exam</p>
		              <span className="quote-icon"><img src="assets/img/icons/quote.png" alt="quote" /></span>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


        }
}

export default ClientV2