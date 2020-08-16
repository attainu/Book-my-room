import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BookingFormV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return<section className="booking-section style-two primary-bg">
		  <div className="container-fluid">
		    <div className="row no-gutters">
		      <div className="col-xl-10 offset-xl-1">
		        <div className="booking-form-wrap">
		          <form id="bookIng-form">
		            <div className="bookIng-inner-wrap row">
		              <div>
		                <div className="input-wrap">
		                  <input type="text" placeholder="Arrive Date" id="arrive-date" />
		                  <i className="far fa-calendar-alt" />
		                </div>
		              </div>
		              <div>
		                <div className="input-wrap">
		                  <input type="text" placeholder="Depart Date" id="depart-date" />
		                  <i className="far fa-calendar-alt" />
		                </div>
		              </div>
		              <div>
		                <div className="input-wrap">
		                  <select name="guests" id="guests">
		                    <option value="Guests">Guests</option>
		                    <option value="Guests">Guests</option>
		                    <option value="Guests">Guests</option>
		                  </select>
		                </div>
		              </div>
		              <div>
		                <div className="input-wrap">
		                  <select name="adult" id="adult">
		                    <option value="Adult">Adult</option>
		                    <option value="Adult">Adult</option>
		                    <option value="Adult">Adult</option>
		                  </select>
		                </div>
		              </div>
		              <div>
		                <div className="input-wrap">
		                  <button type="submit" className="btn filled-btn btn-block btn-black">
		                    check now <i className="far fa-long-arrow-right" />
		                  </button>
		                </div>
		              </div>
		            </div>
		          </form>
		          <div className="booking-shape-1">
		            <img src={publicUrl+"assets/img/shape/01.png"} alt="shape" />
		          </div>
		          <div className="booking-shape-2">
		            <img src={publicUrl+"assets/img/shape/06.png"} alt="shape" />
		          </div>
		          <div className="booking-shape-3">
		            <img src={publicUrl+"assets/img/shape/07.png"} alt="shape" />
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


        }
}

export default BookingFormV2