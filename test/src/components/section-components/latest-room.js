import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestRoom extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="latest-room section-bg section-padding">
	  <div className="container-fluid">
	    <div className="row align-items-center no-gutters">
	      <div className="col-lg-3">
	        {/* Section Title */}
	        <div className="section-title">
	          <span className="title-top with-border">Latest Product</span>
	          <h1>Modern Hotel &amp; Room For Luxury Living</h1>
	          <p>Ullam corporis suscipit laboriosam nisi ut aliqucoe modi consequatur Quis autem vel eum
	            iure repreh nderitqui in ea voluptate velit esse quam nihil molestiae </p>
	          {/* Page Info */}
	          <div className="pagingInfo" />
	          {/* Room Arrow */}
	          <div className="room-arrows" />
	        </div>
	      </div>
	      <div className="col-lg-8 offset-lg-1">
	        <div className="row latest-room-slider" id="roomSliderActive">
	          <div className="col-lg-4">
	            {/* Single Room */}
	            <div className="single-room">
	              <div className="room-thumb">
	                <img src={publicUrl+"assets/img/rooms/01.jpg"} alt="Room" />
	              </div>
	              <div className="room-desc">
	                <div className="room-cat">
	                  <p>Guest House</p>
	                </div>
	                <h4 className="avson-go-top"><Link to="/room-details">Modern Guest Rooms</Link></h4>
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
	          <div className="col-lg-4">
	            {/* Single Room */}
	            <div className="single-room">
	              <div className="room-thumb">
	                <img src={publicUrl+"assets/img/rooms/02.jpg"} alt="Room" />
	              </div>
	              <div className="room-desc">
	                <div className="room-cat">
	                  <p>Meeting Room</p>
	                </div>
	                <h4 className="avson-go-top"><Link to="/room-details">Conference Room</Link></h4>
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
	          <div className="col-lg-4">
	            {/* Single Room */}
	            <div className="single-room">
	              <div className="room-thumb">
	                <img src={publicUrl+"assets/img/rooms/03.jpg"} alt="Room" />
	              </div>
	              <div className="room-desc">
	                <div className="room-cat">
	                  <p>Guest Room</p>
	                </div>
	                <h4 className="avson-go-top"><Link to="/room-details">Deluxe Couple Room</Link></h4>
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
	          <div className="col-lg-4">
	            {/* Single Room */}
	            <div className="single-room">
	              <div className="room-thumb">
	                <img src={publicUrl+"assets/img/rooms/01.jpg"} alt="Room" />
	              </div>
	              <div className="room-desc">
	                <div className="room-cat">
	                  <p>Guest House</p>
	                </div>
	                <h4 className="avson-go-top"><Link to="/room-details">Modern Guest Rooms</Link></h4>
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
	          <div className="col-lg-4">
	            {/* Single Room */}
	            <div className="single-room">
	              <div className="room-thumb">
	                <img src={publicUrl+"assets/img/rooms/02.jpg"} alt="Room" />
	              </div>
	              <div className="room-desc">
	                <div className="room-cat">
	                  <p>Meeting Room</p>
	                </div>
	                <h4 className="avson-go-top"><Link to="/room-details">Conference Room</Link></h4>
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
	          <div className="col-lg-4">
	            {/* Single Room */}
	            <div className="single-room">
	              <div className="room-thumb">
	                <img src={publicUrl+"assets/img/rooms/03.jpg"} alt="Room" />
	              </div>
	              <div className="room-desc">
	                <div className="room-cat">
	                  <p>Guest Room</p>
	                </div>
	                <h4 className="avson-go-top"><Link to="/room-details">Deluxe Couple Room</Link></h4>
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
	    </div>
	  </div>
	</section>

        }
}

export default LatestRoom