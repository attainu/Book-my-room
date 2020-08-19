import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { detail, photosDetail} from "../../Api";


class RoomDetails extends Component {
	    constructor(props){
	    	super(props);
	    	this.state = { room: '', i: this.props.location.state.location_id, photos: '' };
	    }

        async componentDidMount(){
	        var room = await detail(this.state.i);
			var photos = await photosDetail(this.state.i);
			this.setState({
				room: room
			})
			this.setState({
				photos: photos
			})
			console.log(this.state.room)
	    }
		
    	render(){
    		let publicUrl = process.env.PUBLIC_URL + '/'
    		let imagealt = 'image'
		return (<section className="room-details-wrapper section-padding">
			<div className="container" >
				<div className="row">
					
					<div className="col-lg-12">
						<div className="post-thumb position-relative">
							<div className="post-thumb-slider">
								<div className="main-slider">
									<div className="single-img">
										<a className="main-img">
											<img src={this.state.photos.photo1 ? this.state.photos.photo1.images.large.url  : null} style={{width: "100%", maxHeight: "450px"}}  />
										</a>
									</div>
									<div className="single-img">
										<a className="main-img">
											<img src={this.state.photos.photo2 ? this.state.photos.photo2.images.large.url  : null} style={{width: "100%", maxHeight: "450px"}} />
										</a>
									</div>
									<div className="single-img">
										<a className="main-img">
											<img src={this.state.photos.photo3 ? this.state.photos.photo3.images.large.url  : null} style={{width: "100%", maxHeight: "450px"}} />
										</a>
									</div>
									<div className="single-img">
										<a className="main-img">
											<img src={this.state.photos.photo4 ? this.state.photos.photo4.images.large.url  : null} style={{width: "100%", maxHeight: "450px"}} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
                        <h2 className="entry-title text-justifys">{this.state.room.name}</h2>
						{/* Room Details */}
						<div className="room-details">
							<div className="entry-header">
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
													<p>{this.state.room.description}</p>
													<div className="row mt-1 mb-1">
													   <div className="col-3">
													       <p><b><i classname="fas fa-phone"></i> Phone</b></p>
													   </div>
													   <div className="col-9">
													      <p>{this.state.room.phone}</p>
													   </div>
													</div>
													<div className="row mb-1">
													   <div className="col-3">
													       <p><b><i classname="fas fa-envelope"></i> Email</b></p>
													   </div>
													   <div className="col-9">
													      <p>{this.state.room.email}</p>
													   </div>
													</div>
													<div className="row mb-1">
													   <div className="col-3">
													       <p><b><i classname="fas fa-globe"></i> Web Site</b></p>
													   </div>
													   <div className="col-9">
													      <p>{this.state.room.website}</p>
													   </div>
													</div>
												</div>
												<div className="room-specification">
													<div className="row">

													</div>
												</div>
											</div>
											<div role="tabpanel" className="tab-pane fade" id="location">
												<h5 className="tab-title">Location</h5>
												<div style={{ overflow: 'hidden', width: '585px', position: 'relative' }}><iframe width={585} height={580} src="https://maps.google.com/maps?width=1920&height=670&hl=en&q=delhi%2C%20United%20Kingdom+(Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><div style={{ position: 'absolute', width: '80%', bottom: '10px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', color: '#000', textAlign: 'center' }}><small style={{ lineHeight: '1.8', fontSize: '2px', background: '#fff' }}>Powered by <a href="https://embedgooglemaps.com/es/">Embedgooglemaps ES</a> &amp; <a href="https://www.jubler.org/">increase website traffic</a></small></div><style dangerouslySetInnerHTML={{ __html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /></div><br />
												<div className="room-location">
													<div className="row">
														<div className="col-4 tex-center">
															<h6>Country</h6>
															<p>{this.state.room.address_obj && this.state.room.address_obj.country}</p>
														</div>
														<div className="col-4 text-center">
															<h6>state</h6>
															<p>{this.state.room.address_obj && this.state.room.address_obj.state}</p>
														</div>
														<div className="col-4 text-center">
															<h6>City</h6>
															<p>{this.state.room.address_obj && this.state.room.address_obj.city}</p>
														</div>
													</div>

													<div className="row">
													    <div className="col-6 text-center">
															<h6>Street(s)</h6>
															<p>{this.state.room.address_obj && this.state.room.address_obj.street1}</p>
															<p>{this.state.room.address_obj && this.state.room.address_obj.street2}</p>
													    </div>
													    <div className="col-6 text-center">
													        <h6>Postal Code</h6>
													        <p>{this.state.room.address_obj && this.state.room.address_obj.postalcode}</p>
													    </div>
													</div>
												</div>
											</div>
											<div role="tabpanel" className="tab-pane fade" id="reviews">
												<h5 className="tab-title">Reviews</h5>
												<div className="reviews-count">
													<div className="row">
														<div className="col-4 text-center">
															<h2>{this.state.room.rating} / 5</h2>
															<span className="text-center text-warning">Rating</span>
														</div>
														<div className="col-8">
															<div className="reviews-bars">
																<h3>{this.state.room.ranking}</h3>
															</div>
														</div>
													</div>
												</div>
												<div className="comment-area">
													<h5 className="tab-title">All Reviews</h5>
													<ul className="comment-list">
                                                        {this.state.room && this.state.room.room_tips.map(comment => {
                                                        	var fecha =  new Date(comment.created_time)
                                                        	var ano = fecha.getFullYear()
                                                        	var mesA= fecha.getMonth()+1
                           
                                                        	var mes = mesA < 10  ? '0'+mesA : mesA
                                                        	var dia = fecha.getDate()
                                                        	var cont = 0;
                                                        	var clase = [];
                                                            for(var i=0; i<comment.rating; i++){
					                                              clase.push('fa fa-star')
                                                            }
                                                           
                                                            var subtraction = 5 - comment.rating;
                                                            if(subtraction > 0){
                                                            	for(var i=0; i<subtraction; i++){
					                                              clase.push('fa fa-star text-dark')
                                                                }
                                                            }

															return (<li>
																<div className="comment-autor">
																	<img src={ comment.user.avatar == '' ? "assets/img/blog-details/04.jpg" : comment.user.avatar.large.url} alt="reviews" />
																</div>
																<div className="comment-desc">
																	<h6>{comment.user.name == null ? 'Anonymous' : comment.user.name } <span className="comment-date"> {dia}/{mes}/{ano}</span></h6>
																	<p>{comment.text}</p>
																	
																	<div className="autor-rating">
																		{
																			clase.map(rating => {
																				return(<i className={rating} />)
																			})
																		}
																	</div>
																</div>
															</li>)
													    })
													    }

													</ul>
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
								<h4 className="widget-title text-center">{this.state.room.price}</h4>
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


						</div>
					</div>

				</div>

				<div className="row mb-5">
				     <div className="col-lg-12">
                         <h4 className="text-center">Amenities</h4><br/>
				     </div>
				     {this.state.room && this.state.room.amenities.map(amenitie => {
						return (<div className="col-md-3 mb-2">
								<i className="fa fa-check text-success"></i> <span class="badge badge-light">{amenitie.name}</span>
							</div>)
					 	})
					}
				</div>
			</div>
		</section>)
	}

}

export default withRouter(RoomDetails)