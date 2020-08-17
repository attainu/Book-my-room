import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestRoomV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="latest-room-d section-bg section-padding">
			  <div className="container">
			    {/* Section Title */}
			    <div className="section-title text-center">
			      <span className="title-top">Latest Product</span>
			      <h1>Explore Latest Product</h1>
			    </div>
			    <div className="row">
			      <div className="col-lg-4 col-md-6">
			        {/* Single Room */}
			        <div className="single-room">
			          <div className="room-thumb">
			            <img src={publicUrl+"assets/img/rooms/01.jpg"} alt="Room" />
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
			      <div className="col-lg-4 col-md-6">
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
			      <div className="col-lg-4 col-md-6 mx-auto">
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
			    </div>
			  </div>
			</section>

        }
}

export default LatestRoomV2