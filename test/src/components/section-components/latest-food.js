import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestFood extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="latest-food section-padding">
			  <div className="container">
			    <div className="section-title text-center">
			      <span className="title-top">Latest Food</span>
			      <h1>Popular Dishes</h1>
			    </div>
			    {/* Foods Wrap */}
			    <div className="row">
			      <div className="col-lg-3 col-md-6 col-sm-6">
			        <div className="single-latest-food">
			          <div className="food-img">
			            <img src={publicUrl+"assets/img/food/01.jpg"} alt="Food" />
			          </div>
			          <div className="l-food-desc d-flex justify-content-between align-items-center">
			            <h4>London <br /> Mashroom</h4>
			            <p className="price"><span className="price-currency">$</span> 59</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6 col-sm-6">
			        <div className="single-latest-food">
			          <div className="food-img">
			            <img src={publicUrl+"assets/img/food/02.jpg"} alt="Food" />
			          </div>
			          <div className="l-food-desc d-flex justify-content-between align-items-center">
			            <h4>Special <br /> Hot Burger</h4>
			            <p className="price"><span className="price-currency">$</span> 29</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6 col-sm-6">
			        <div className="single-latest-food">
			          <div className="food-img">
			            <img src={publicUrl+"assets/img/food/03.jpg"} alt="Food" />
			          </div>
			          <div className="l-food-desc d-flex justify-content-between align-items-center">
			            <h4>Italian <br /> Supper Pizza</h4>
			            <p className="price"><span className="price-currency">$</span> 85</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6 col-sm-6">
			        <div className="single-latest-food">
			          <div className="food-img">
			            <img src={publicUrl+"assets/img/food/11.jpg"} alt="Food" />
			          </div>
			          <div className="l-food-desc d-flex justify-content-between align-items-center">
			            <h4>Special <br /> Hot Burger</h4>
			            <p className="price"><span className="price-currency">$</span> 47</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default LatestFood