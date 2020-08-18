import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import RoomDetails from '../room-details';

class RoomList extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="rooms-warp list-view section-bg section-padding ">
			<div className="container">
				<div className="row">
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
										<select name="rooms" id="rooms" defaultValue={'DEFAULT'}>
											<option disabled value="DEFAULT">Rooms</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</div>
									<div className="input-wrap">
										<select name="adults" id="adults" defaultValue={'DEFAULT'}>
											<option value="default" disabled value="DEFAULT">Adults</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
										</select>
									</div>
									<div className="input-wrap">
										<select name="child" id="child" defaultValue={'Children'}>
											<option disabled defaultValue={'Children'}>Children</option>
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
						</div>
					</div>
					<div className="col-lg-8">
						{/* Single Room */}
						<div className="single-room list-style avson-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/rooms/10.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
									
											<h1>Hotel Name</h1>
	
										<h4><Link to="/room-details">Modern Guest Rooms</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="far fa-bed" />3 Bed</li>
											<li><i className="far fa-bath" />2 Baths</li>
											<li><i className="far fa-ruler-triangle" />72 m</li>
										</ul>
										<div className="room-price">
											<div>
										
												<button  className="btn btn-primary"><Link to="/room-details">View Details</Link></button>
												<button  className="btn btn-dark">Book</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style avson-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/rooms/11.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
									<h1>Hotel Name</h1>
										<h4><Link to="/room-details">Conference Room</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="far fa-bed" />3 Bed</li>
											<li><i className="far fa-bath" />2 Baths</li>
											<li><i className="far fa-ruler-triangle" />72 m</li>
										</ul>
										<div className="room-price">
											<div>
											<button  className="btn btn-primary"><Link to="/room-details">View Details</Link></button>
												<button  className="btn btn-dark">Book</button>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style avson-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/rooms/12.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
									<h1>Hotel Name</h1>
										<h4><Link to="/room-details">Deluxe Couple Room</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="far fa-bed" />3 Bed</li>
											<li><i className="far fa-bath" />2 Baths</li>
											<li><i className="far fa-ruler-triangle" />72 m</li>
										</ul>
										<div className="room-price">
											<div>
											<button  className="btn btn-primary"><Link to="/room-details">View Details</Link></button>
												<button  className="btn btn-dark">Book</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style avson-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/rooms/13.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
									<h1>Hotel Name</h1>
										<h4><Link to="/room-details">Conference Room</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="far fa-bed" />3 Bed</li>
											<li><i className="far fa-bath" />2 Baths</li>
											<li><i className="far fa-ruler-triangle" />72 m</li>
										</ul>
										<div className="room-price">
											<div>
											<button  className="btn btn-primary"><Link to="/room-details">View Details</Link></button>
												<button  className="btn btn-dark">Book</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Single Room */}
						<div className="single-room list-style avson-go-top">
							<div className="row align-items-center no-gutters">
								<div className="col-lg-6">
									<div className="room-thumb">
										<img src={publicUrl + "assets/img/rooms/14.jpg"} alt="Room" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="room-desc">
									<h1>Hotel Name</h1>
										<h4><Link to="/room-details">Deluxe Couple Room</Link></h4>
										<ul className="room-info list-inline">
											<li><i className="far fa-bed" />3 Bed</li>
											<li><i className="far fa-bath" />2 Baths</li>
											<li><i className="far fa-ruler-triangle" />72 m</li>
										</ul>
										<div className="room-price">
											<div>
												<button onClick={RoomDetails} className="btn btn-primary">View Details</button>
												<button  className="btn btn-dark">Book</button>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							<div className="row">
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
					</div>
				</div>

			</div>
		</section>


	}
}

export default RoomList;