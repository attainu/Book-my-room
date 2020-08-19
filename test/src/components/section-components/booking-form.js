import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.css';
import RoomList from './room-list'
import { useDispatch } from 'react-redux';
import { upadateFetchedDataFromApi } from './../../actions';
import { createBrowserHistory } from 'history'

function BookingForm() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	let publicUrl = process.env.PUBLIC_URL + '/'
	let imagealt = 'image'

	const textChange = (e) => {
		setSearch(e.target.value);
	}

	async function GetHotelList() {
		var city = document.getElementById("location").value;
		var location_id = await GetCityId(city);
		var url = `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${location_id}&adults=1&checkin=%3Crequired%3E&rooms=1&nights=2`;

		var options = {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
				"x-rapidapi-key": "46a89ac737mshb064286f725eebap1e3e2ajsn00c8bf13f078"
			}
		};

		var res = await fetch(url, options);
		var data = await res.json();

		console.log(data);
		dispatch(upadateFetchedDataFromApi(data.data));

		const browserHistory = createBrowserHistory();
		//browserHistory.push('/room-list')
		// props.history.push('/room-list')

		// TODO: Dynamically navigate to /room-list route
	}

	async function GetCityId(city) {
		city = city.replace(" ", "%20");
		var url = `https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=km&query=${city}`

		var options = {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
				"x-rapidapi-key": "46a89ac737mshb064286f725eebap1e3e2ajsn00c8bf13f078"
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

	return <section className="booking-section">
		<div className="container">
			<div className="booking-form-wrap bg-img-center section-bg">
				<div id="bookIng-form">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="text" id="input" name="location" placeholder="Location" id="location" />
								<i className="far fa-search" />
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="text" name="arrive-date" placeholder="Arrive Date" id="arrive-date" />
								<i className="far fa-calendar-alt" />
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<input type="text" name="depart-date" placeholder="Depart Date" id="depart-date" />
								<i className="far fa-calendar-alt" />
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<select name="guests" id="guests">
									<option value="Guests">Guests</option>
									<option value="Guests">Guests</option>
									<option value="Guests">Guests</option>
								</select>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<select name="adult" id="adult">
									<option value="Adult">Adult</option>
									<option value="Adult">Adult</option>
									<option value="Adult">Adult</option>
								</select>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="input-wrap">
								<button
								 		onClick={GetHotelList}
 										className="btn filled-btn btn-block  btn-primary">
									book now <i className="far fa-long-arrow-right" />
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
	</section>


}

export default BookingForm;