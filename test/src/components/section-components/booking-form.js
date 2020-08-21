import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.css';
import RoomList from './room-list'
import {connect} from 'react-redux';
import { upadateFetchedDataFromApi } from './../../actions';

class BookingForm extends Component{

	constructor(){
		super()
		this.state = {
			location: '', nights: '', checkIn: '', adult: '', rooms: ''
		}
	}

    textChange = (e) => {
		this.setState({ location: e.target.value })
	}
	inputNight = (e) => {
		this.setState({ nights: e.target.value })
	}
	inputCheckIn = (e) => {
		this.setState({ checkIn: e.target.value })
		console.log(this.state.checkIn)
	}
	inputAdult = (e) => {
		this.setState({ adult: e.target.value })
	}
	inputRooms = (e) => {
		this.setState({ rooms: e.target.value })
	}

	async GetHotelList(){

		var location_id = await this.GetCityId(this.state.location);
		console.log(this.state)
		var url = `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${location_id}&adults=1&checkin=%3Crequired%3E&rooms=1&nights=2`;

		var options = {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
				"x-rapidapi-key":  "9d06efcbb8msha01ff82dbda6289p1c7f0cjsn00aba3a126b9"
			}
		};
		var res = await fetch(url, options);
		var data = await res.json();

		console.log(data);
		this.props.dispatch(upadateFetchedDataFromApi(data.data));


	}
	async GetCityId(city){

		city = city.replace(" ", "%20");

		var url = `https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=km&query=${city}`


		var options = {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
				"x-rapidapi-key":  "9d06efcbb8msha01ff82dbda6289p1c7f0cjsn00aba3a126b9"
			}
		};
		var res = await fetch(url, options);
		var data = await res.json();

		console.log(data);
		var loc_id;
		for (const i of data.data) {
			if (i.result_type == "geos") {
				loc_id = i.result_object.location_id;
				break;
			}
		}
		return loc_id;

	}

	render(){
     let publicUrl = process.env.PUBLIC_URL + '/'
	let imagealt = 'image'
	return (<section className="booking-section">
		<div className="container">
			<div className="booking-form-wrap bg-img-center section-bg">
				<div id="bookIng-form">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="text" value={this.state.location} onChange={this.textChange.bind(this)} name="location" placeholder="Location" id="location" />
								<i className="far fa-search" />
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="number" value={this.state.nights} onChange={this.inputNight.bind(this)} name="nights" placeholder="nights" id="nights" />
								<i className="far fa-search" />
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="text" value={this.state.checkIn}  onChange={this.inputCheckIn.bind(this)} name="depart-date" placeholder="checkIn" id="depart-date" />
								<i className="far fa-calendar-alt" />
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<div className="input-wrap">
									<input type="number" value={this.state.rooms} onChange={this.inputRooms.bind(this)} name="rooms" placeholder="Rooms" id="Rooms" />
									<i className="far fa-search" />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="text" value={this.state.adult} onChange={this.inputAdult.bind(this)} name="adults" placeholder="Adults" id="adults" />
							    <i className="far fa-user" />
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<button onClick={this.GetHotelList.bind(this)} className="btn filled-btn btn-block  btn-primary">
									<Link to ="/room-list"><h3>SEARCH</h3></Link> <i className="far fa-long-arrow-right" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="booking-shape-1">
					<img src={publicUrl + "assets/img/shape/01.png"} alt="shape" />
				</div>
				<div className="booking-shape-2">
					<img src={publicUrl + "assets/img/shape/02.png"} alt="shape" />
				</div>
				<div className="booking-shape-3">
					<img src={publicUrl + "assets/img/shape/03.png"} alt="shape" />
				</div>
			</div>
		</div>
	</section>)
	}
}

export default connect(null)(BookingForm)