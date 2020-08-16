import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class RoomDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="room-details-wrapper section-padding">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        {/* Room Details */}
		        <div className="room-details">
		          <div className="entry-header">
		            <div className="post-thumb position-relative">
		              <div className="post-thumb-slider">
		                <div className="main-slider">
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/01.jpg" }className="main-img">
		                      <img src={publicUrl+"assets/img/blog/01.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/02.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/02.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/03.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/03.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/04.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/04.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/01.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/01.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/02.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/02.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/03.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/03.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                  <div className="single-img">
		                    <a href={publicUrl+"assets/img/blog/04.jpg"} className="main-img">
		                      <img src={publicUrl+"assets/img/blog/04.jpg"} alt="Image" />
		                    </a>
		                  </div>
		                </div>
		              </div>
		              <div className="price-tag">$180</div>
		            </div>
		            <div className="room-cat">
		              <a href="#">Guest House</a>
		            </div>
		            <h2 className="entry-title">Modern Guest Rooms</h2>
		            <ul className="entry-meta list-inline">
		              <li><i className="far fa-bed" />3 Bed</li>
		              <li><i className="far fa-bath" />2 Baths</li>
		              <li><i className="far fa-ruler-triangle" />72 m</li>
		            </ul>
		          </div>
		          <div className="room-details-tab">
		            <div className="row">
		              <div className="col-sm-3">
		                <ul className="nav desc-tab-item" role="tablist">
		                  <li className="nav-item">
		                    <a className="nav-link active" href="#desc" role="tab" data-toggle="tab">Room Details</a>
		                  </li>
		                  <li className="nav-item">
		                    <a className="nav-link" href="#location" role="tab" data-toggle="tab">Location</a>
		                  </li>
		                  <li className="nav-item">
		                    <a className="nav-link" href="#reviews" role="tab" data-toggle="tab">Reviews</a>
		                  </li>
		                </ul>
		              </div>
		              <div className="col-sm-9">
		                <div className="tab-content desc-tab-content">
		                  <div role="tabpanel" className="tab-pane fade in active show" id="desc">
		                    <h5 className="tab-title">Room Details </h5>
		                    <div className="entry-content">
		                      <p>
		                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
		                        accusantium
		                        doloremque
		                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
		                        veritatis et quasi
		                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
		                        voluptatem
		                        quia
		                        voluptas
		                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni
		                        dolores
		                        eos qui
		                        ratione
		                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
		                        ipsum
		                        quia dolor
		                        sit
		                        amet, consectetur, adipisci velit, sed quia non numquam eius
		                        modi
		                        tempora incidunt
		                        ut
		                        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
		                        minima
		                        veniam, quis
		                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi
		                        ut
		                        aliquid ex ea
		                        comm
		                        odi consequatur
		                      </p>
		                      <div className="entry-gallery-img">
		                        <figure className="entry-media-img">
		                          <img src={publicUrl+"assets/img/blog/02.jpg"} alt="Image" />
		                        </figure>
		                      </div>
		                    </div>
		                    <div className="room-specification">
		                      <div className="row">
		                        <div className="col-lg-4 col-md-12">
		                          <div className="pricing-plan">
		                            <h4 className="specific-title"> Pricing Plan </h4>
		                            <table>
		                              <tbody>
		                                <tr>
		                                  <td>Nightly: </td>
		                                  <td className="big">$525</td>
		                                </tr>
		                                <tr>
		                                  <td>Weekends (Sat_sun): </td>
		                                  <td className="big">$515</td>
		                                </tr>
		                                <tr>
		                                  <td>Weekly (7d+): </td>
		                                  <td className="big">$515</td>
		                                </tr>
		                                <tr>
		                                  <td>Monthly (30d+): </td>
		                                  <td className="big">$505</td>
		                                </tr>
		                                <tr>
		                                  <td>Cleaning Fee: </td>
		                                  <td className="big">$1050</td>
		                                </tr>
		                                <tr>
		                                  <td>City Fee:</td>
		                                  <td className="big">$25 Per Stay</td>
		                                </tr>
		                                <tr>
		                                  <td>Minimum Number Of Days:</td>
		                                  <td className="big">1</td>
		                                </tr>
		                                <tr>
		                                  <td>Maximum Number Of Days:</td>
		                                  <td className="big">60</td>
		                                </tr>
		                              </tbody>
		                            </table>
		                          </div>
		                        </div>
		                        <div className="col-lg-4 col-6">
		                          <div className="feature">
		                            <h4 className="specific-title"> Features </h4>
		                            <ul>
		                              <li>Gym </li>
		                              <li>Laundry</li>
		                              <li>TV Cable</li>
		                              <li>Wi-Fi</li>
		                            </ul>
		                          </div>
		                          <div className="facilities">
		                            <h4 className="specific-title"> Facilities </h4>
		                            <ul>
		                              <li>Farmacy </li>
		                              <li>Free Parking</li>
		                              <li>Reception</li>
		                              <li>Security</li>
		                            </ul>
		                          </div>
		                        </div>
		                        <div className="col-lg-4 col-6">
		                          <div className="accomodation">
		                            <h4 className="specific-title"> Features </h4>
		                            <ul>
		                              <li>Master Room</li>
		                              <li>1 King Size</li>
		                              <li>2 Guests</li>
		                            </ul>
		                          </div>
		                          <div className="bedrooms">
		                            <h4 className="specific-title"> Bedrooms </h4>
		                            <ul>
		                              <li>1 Queen Size</li>
		                              <li>2 Guests</li>
		                            </ul>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                  </div>
		                  <div role="tabpanel" className="tab-pane fade" id="location">
		                    <h5 className="tab-title">Location</h5>
			 		 			<div style={{overflow: 'hidden', width: '585px', position: 'relative'}}><iframe width={585} height={580} src="https://maps.google.com/maps?width=1920&height=670&hl=en&q=London%2C%20United%20Kingdom+(Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><div style={{position: 'absolute', width: '80%', bottom: '10px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', color: '#000', textAlign: 'center'}}><small style={{lineHeight: '1.8', fontSize: '2px', background: '#fff'}}>Powered by <a href="https://embedgooglemaps.com/es/">Embedgooglemaps ES</a> &amp; <a href="https://www.jubler.org/">increase website traffic</a></small></div><style dangerouslySetInnerHTML={{__html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /></div><br />
		                    <div className="room-location">
		                      <div className="row">
		                        <div className="col-4">
		                          <h6>City</h6>
		                          <p>London, Uk</p>
		                        </div>
		                        <div className="col-4">
		                          <h6>Phone</h6>
		                          <p>+901280-89121</p>
		                          <p>+901280-89121</p>
		                        </div>
		                        <div className="col-4">
		                          <h6>Email</h6>
		                          <p>room@avson.com</p>
		                        </div>
		                      </div>
		                    </div>
		                  </div>
		                  <div role="tabpanel" className="tab-pane fade" id="reviews">
		                    <h5 className="tab-title">Reviews</h5>
		                    <div className="reviews-count">
		                      <div className="row">
		                        <div className="col-4">
		                          <div className="count-num d-flex align-items-center justify-content-center">
		                            <p> <span>6.8</span>Suprrb</p>
		                          </div>
		                        </div>
		                        <div className="col-8">
		                          <div className="reviews-bars">
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Acaommodation
		                                <span>8.0</span></p>
		                              <div className="bar" data-width="80%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Destination
		                                <span>6.0</span></p>
		                              <div className="bar" data-width="60%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Transport
		                                <span>7.0</span></p>
		                              <div className="bar" data-width="70%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                            {/* Single bar */}
		                            <div className="single-bar">
		                              <p className="bar-title">Overall
		                                <span>9.0</span></p>
		                              <div className="bar" data-width="90%">
		                                <div className="bar-inner" />
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <div className="comment-area">
		                      <h5 className="tab-title">All Reviews</h5>
		                      <ul className="comment-list">
		                        <li>
		                          <div className="comment-autor">
		                            <img src={publicUrl+"assets/img/blog-details/04.jpg"} alt="reviews" />
		                          </div>
		                          <div className="comment-desc">
		                            <h6>Alexzeder Alex <span className="comment-date"> 25 Feb
		                                2020</span></h6>
		                            <p>But I must explain to you how all this mistaken idea
		                              of denouncing pleasure
		                              and praising pain was born and I will give you a
		                              complete account</p>
		                            <a href="#" className="reply-comment">Reply <i className="far fa-long-arrow-right" /></a>
		                            <div className="autor-rating">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star-half-alt" />
		                            </div>
		                          </div>
		                        </li>
		                      </ul>
		                    </div>
		                    <div className="review-form">
		                      <h5 className="tab-title">Write a Review</h5>
		                      <div className="star-given-box">
		                        <ul className="list-inline">
		                          <li>
		                            <p className="st-title">Acaommodation</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                          <li>
		                            <p className="st-title">Destination</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                          <li>
		                            <p className="st-title">Transport</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                          <li>
		                            <p className="st-title">Overall</p>
		                            <p className="rating-box">
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                              <i className="fa fa-star" />
		                            </p>
		                          </li>
		                        </ul>
		                      </div>
		                      <form>
		                        <div className="input-wrap text-area">
		                          <textarea placeholder="Write Review" defaultValue={""} />
		                          <i className="far fa-pencil" />
		                        </div>
		                        <div className="input-wrap">
		                          <input type="text" placeholder="Name" id="name" />
		                          <i className="far fa-user-alt" />
		                        </div>
		                        <div className="input-wrap">
		                          <input type="text" placeholder="Your Email" id="email" />
		                          <i className="far fa-envelope" />
		                        </div>
		                        <div className="input-wrap">
		                          <button type="submit" className="btn btn-block">Submit</button>
		                        </div>
		                      </form>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
		        {/* Sidebars Area */}
		        <div className="sidebar-wrap">
		          <div className="widget booking-widget">
		            <h4 className="widget-title">$160.00 <span>Night</span></h4>
		            <form>
		              <div className="input-wrap">
		                <input type="text" placeholder="Location" id="f-location" />
		                <i className="far fa-search" />
		              </div>
		              <div className="input-wrap">
		                <input type="text" placeholder="Arrive Date" id="arrive-date" />
		                <i className="far fa-calendar-alt" />
		              </div>
		              <div className="input-wrap">
		                <input type="text" placeholder="Depart Date" id="depart-date" />
		                <i className="far fa-calendar-alt" />
		              </div>
		              <div className="input-wrap">
		                <select name="guests" id="guests">
		                  <option value="Guests">Guests</option>
		                  <option value="Guests">Guests</option>
		                  <option value="Guests">Guests</option>
		                </select>
		              </div>
		              <div className="input-wrap">
		                <button type="submit" className="btn filled-btn btn-block">
		                  book now <i className="far fa-long-arrow-right" />
		                </button>
		              </div>
		            </form>
		          </div>
		          <div className="widget category-widget avson-go-top">
		            <h4 className="widget-title">Category</h4>
		            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/cat-01.jpg)'}}>
		              <Link to="room-details">Luxury Room</Link>
		            </div>
		            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/cat-02.jpg)'}}>
		              <Link to="room-details">Couple Room</Link>
		            </div>
		            <div className="single-cat bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/blog/cat-03.jpg)'}}>
		              <Link to="room-details">Hotel Views</Link>
		            </div>
		          </div>
		          <div className="widget banner-widget avson-go-top" style={{backgroundImage: 'url(assets/img/blog/sidebar-banner.jpg)'}}>
		            <h2>Booking Your Latest apartment</h2>
		            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor
		              incididunt ut labore </p>
		            <Link to="/room-details" className="btn filled-btn">BOOK NOW <i className="far fa-long-arrow-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default RoomDetails