import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class RoomGrid extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="rooms-warp gird-view section-bg section-padding">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8 avson-go-top">
			        <div className="row">
			          <div className="col-md-6">
			            {/* Single Room */}
			            <div className="single-room">
			              <div className="room-thumb">
			                <img src={publicUrl+"assets/img/rooms/01.jpg"} alt={ imagealt } />
			              </div>
			              <div className="room-desc">
			                <div className="room-cat">
			                  <p>Guest House</p>
			                </div>
			                <h4><Link to="/room-details">Modern Guest Rooms</Link></h4>
			                <p>
			                  Avoids pleasure itself, because pleasure,
			                  but because those who do not know how
			                  to pursue pleasure rationally encounter
			                </p>
			                <ul className="room-info list-inline">
			                  <li><i className="far fa-bed" />3 Bed</li>
			                  <li><i className="far fa-bath" />2 Baths</li>
			                  <li><i className="far fa-ruler-triangle" />72 m</li>
			                </ul>
			                <div className="room-price">
			                  <p>$180.00</p>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-md-6">
			            {/* Single Room */}
			            <div className="single-room">
			              <div className="room-thumb">
			                <img src={publicUrl+"assets/img/rooms/02.jpg"} alt="Room" />
			              </div>
			              <div className="room-desc">
			                <div className="room-cat">
			                  <p>Meeting Room</p>
			                </div>
			                <h4><Link to="/room-details">Conference Room</Link></h4>
			                <p>
			                  Great explorer of the truth, the master-
			                  builder of human happiness one rejects,
			                  dislikes avoids pleasure because
			                </p>
			                <ul className="room-info list-inline">
			                  <li><i className="far fa-bed" />3 Bed</li>
			                  <li><i className="far fa-bath" />2 Baths</li>
			                  <li><i className="far fa-ruler-triangle" />72 m</li>
			                </ul>
			                <div className="room-price">
			                  <p>$205.00</p>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-md-6">
			            {/* Single Room */}
			            <div className="single-room">
			              <div className="room-thumb">
			                <img src={publicUrl+"assets/img/rooms/03.jpg"} alt="Room" />
			              </div>
			              <div className="room-desc">
			                <div className="room-cat">
			                  <p>Guest Room</p>
			                </div>
			                <h4><Link to="/room-details">Deluxe Couple Room</Link></h4>
			                <p>
			                  Provident, similique sunt in culpa qui
			                  officia deserunt mollitia animi laborum
			                  dolorum fuga. Et harum quidem
			                </p>
			                <ul className="room-info list-inline">
			                  <li><i className="far fa-bed" />3 Bed</li>
			                  <li><i className="far fa-bath" />2 Baths</li>
			                  <li><i className="far fa-ruler-triangle" />72 m</li>
			                </ul>
			                <div className="room-price">
			                  <p>$199.00</p>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-md-6">
			            {/* Single Room */}
			            <div className="single-room">
			              <div className="room-thumb">
			                <img src={publicUrl+"assets/img/rooms/04.jpg"} alt="Room" />
			              </div>
			              <div className="room-desc">
			                <div className="room-cat">
			                  <p>Guest House</p>
			                </div>
			                <h4><Link to="/room-details">Study &amp; Library Rooms</Link></h4>
			                <p>
			                  Avoids pleasure itself, because pleasure,
			                  but because those who do not know how
			                  to pursue pleasure rationally encounter
			                </p>
			                <ul className="room-info list-inline">
			                  <li><i className="far fa-bed" />3 Bed</li>
			                  <li><i className="far fa-bath" />2 Baths</li>
			                  <li><i className="far fa-ruler-triangle" />72 m</li>
			                </ul>
			                <div className="room-price">
			                  <p>$180.00</p>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-md-6">
			            {/* Single Room */}
			            <div className="single-room">
			              <div className="room-thumb">
			                <img src={publicUrl+"assets/img/rooms/05.jpg"} alt="Room" />
			              </div>
			              <div className="room-desc">
			                <div className="room-cat">
			                  <p>Meeting Room</p>
			                </div>
			                <h4><Link to="/room-details">Conference Room</Link></h4>
			                <p>
			                  Great explorer of the truth, the master-
			                  builder of human happiness one rejects,
			                  dislikes avoids pleasure because
			                </p>
			                <ul className="room-info list-inline">
			                  <li><i className="far fa-bed" />3 Bed</li>
			                  <li><i className="far fa-bath" />2 Baths</li>
			                  <li><i className="far fa-ruler-triangle" />72 m</li>
			                </ul>
			                <div className="room-price">
			                  <p>$205.00</p>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="col-md-6">
			            {/* Single Room */}
			            <div className="single-room">
			              <div className="room-thumb">
			                <img src={publicUrl+"assets/img/rooms/06.jpg"} alt="Room" />
			              </div>
			              <div className="room-desc">
			                <div className="room-cat">
			                  <p>Guest Room</p>
			                </div>
			                <h4><Link to="/room-details">Deluxe Couple Room</Link></h4>
			                <p>
			                  Provident, similique sunt in culpa qui
			                  officia deserunt mollitia animi laborum
			                  dolorum fuga. Et harum quidem
			                </p>
			                <ul className="room-info list-inline">
			                  <li><i className="far fa-bed" />3 Bed</li>
			                  <li><i className="far fa-bath" />2 Baths</li>
			                  <li><i className="far fa-ruler-triangle" />72 m</li>
			                </ul>
			                <div className="room-price">
			                  <p>$199.00</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="sidebar-wrap">
			          <div className="widget fillter-widget">
			            <h4 className="widget-title">Your Reservation</h4>
			            <form>
			              <div className="input-wrap">
			                <input type="text" placeholder="Location" id="location" />
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
			                <select name="rooms" id="rooms" defaultValue={ "default" }>
			                  <option disabled value="default" >Rooms</option>
			                  <option value={1}>1</option>
			                  <option value={2}>2</option>
			                  <option value={3}>3</option>
			                </select>
			              </div>
			              <div className="input-wrap">
			                <select name="adults" id="adults"  defaultValue={ "default" }>
			                  <option value disabled value="default">Adults</option>
			                  <option value={1}>1</option>
			                  <option value={2}>2</option>
			                  <option value={3}>3</option>
			                </select>
			              </div>
			              <div className="input-wrap">
			                <select name="child" id="child" defaultValue={ "default" }>
			                  <option value disabled value="default">Children</option>
			                  <option value={1}>1</option>
			                  <option value={2}>2</option>
			                  <option value={3}>3</option>
			                </select>
			              </div>
			              <div className="input-wrap">
			                <div className="price-range-wrap">
			                  <div className="slider-range">
			                    <div id="slider-range" />
			                  </div>
			                  <div className="price-ammount">
			                    <input type="text" id="amount" name="price" placeholder="Add Your Price" />
			                  </div>
			                </div>
			              </div>
			              <div className="input-wrap">
			                <div className="checkboxes">
			                  <p>
			                    <input type="checkbox" defaultValue="guest-room" id="guest-room" />
			                    <label htmlFor="guest-room">Guest Room</label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="meeting-room" id="meeting-room" />
			                    <label htmlFor="meeting-room">Meeting Room </label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="wifi" id="wifi" />
			                    <label htmlFor="wifi">Free Wifi</label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="pet" id="pet" />
			                    <label htmlFor="pet">Pet Friendly</label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="parking" id="parking" />
			                    <label htmlFor="parking">Parking</label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="pureair" id="pureair" />
			                    <label htmlFor="pureair">Pure Air</label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="airc" id="airc" />
			                    <label htmlFor="airc">Air Conditioner</label>
			                  </p>
			                  <p>
			                    <input type="checkbox" defaultValue="nosmoke" id="nosmoke" />
			                    <label htmlFor="nosmoke">No Smoking</label>
			                  </p>
			                </div>
			              </div>
			              <div className="input-wrap">
			                <button type="submit" className="btn filled-btn btn-block">
			                  Filter Results <i className="far fa-long-arrow-right" />
			                </button>
			              </div>
			            </form>
			          </div>
			          <div className="widget banner-widget" style={{backgroundImage: 'url(assets/img/blog/sidebar-banner.jpg)'}}>
			            <h2>Booking Your Latest apartment</h2>
			            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod tempor
			              incididunt ut labore </p>
			            <a href="#" className="btn filled-btn">BOOK NOW <i className="far fa-long-arrow-right" /></a>
			          </div>
			        </div>
			      </div>
			      <div className="col-12">
			        <div className="pagination-wrap">
			          <ul className="list-inline">
			            <li><a href=""><i className="far fa-angle-left" /></a></li>
			            <li className="active"><a href="">01</a></li>
			            <li><a href="">02</a></li>
			            <li><a href="">03</a></li>
			            <li><a href=""><i className="far fa-angle-right" /></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default RoomGrid