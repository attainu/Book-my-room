import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class OurStaff extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="staffs-section section-padding">
			  <div className="container">
			    <div className="row">
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/01.jpg"} alt="Staff" />
			          </div>
			          <h4>Andrew Simmons</h4>
			          <p className="staff-post">CEO &amp; Founder</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/02.jpg"} alt="Staff" />
			          </div>
			          <h4>Dean Santiago</h4>
			          <p className="staff-post">General Manager</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/03.jpg"} alt="Staff" />
			          </div>
			          <h4>Kevin P. Tucker</h4>
			          <p className="staff-post">HS Manager</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/04.jpg"} alt="Staff" />
			          </div>
			          <h4>James J. White</h4>
			          <p className="staff-post">Main Security</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/05.jpg"} alt="Staff" />
			          </div>
			          <h4>James J.Allen</h4>
			          <p className="staff-post">CEO Founder</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/06.jpg"} alt="Staff" />
			          </div>
			          <h4>Jason Shockly</h4>
			          <p className="staff-post">General Manager</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/07.jpg"} alt="Staff" />
			          </div>
			          <h4>Andres Porter</h4>
			          <p className="staff-post">HS Manager</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/08.jpg"} alt="Staff" />
			          </div>
			          <h4>Floyd J. Russell</h4>
			          <p className="staff-post">Main Security</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/09.jpg"} alt="Staff" />
			          </div>
			          <h4>Joseph E. Metts</h4>
			          <p className="staff-post">CEO Founder</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/10.jpg"} alt="Staff" />
			          </div>
			          <h4>Kurt J. Jones</h4>
			          <p className="staff-post">General Manager</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/11.jpg"} alt="Staff" />
			          </div>
			          <h4>Gavin M. Coyle</h4>
			          <p className="staff-post">HS Manager</p>
			        </div>
			      </div>
			      {/* Single Staff */}
			      <div className="col-lg-3 col-md-4 col-6">
			        <div className="staff-fact text-center">
			          <div className="staf-img">
			            <img src={publicUrl+"assets/img/staff/12.jpg"} alt="Staff" />
			          </div>
			          <h4>Robert D. Bizzell</h4>
			          <p className="staff-post">Main Security</p>
			        </div>
			      </div>
			    </div>
			    <div className="pagination-wrap">
			      <ul className="list-inline">
			        <li><a href="#"><i className="far fa-angle-left" /></a></li>
			        <li className="active"><a href="#">01</a></li>
			        <li><a href="#">02</a></li>
			        <li><a href="#">03</a></li>
			        <li><a href="#"><i className="far fa-angle-right" /></a></li>
			      </ul>
			    </div>
			  </div>
			</section>


        }
}

export default OurStaff