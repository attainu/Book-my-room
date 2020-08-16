import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FoodMenu extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="food-section section-padding">
		  <div className="container">
		    <div className="section-title text-center">
		      <span className="title-top">Regular Food</span>
		      <h1>Main Menu / Food List</h1>
		    </div>
		    <div className="regular-food-wrap">
		      <div className="row">
		        <div className="col-lg-6">
		          <div className="single-regular-food d-flex justify-content-between align-items-center">
		            <div className="food-img">
		              <img src={publicUrl+"assets/img/food/04.jpg"} alt="Food" />
		            </div>
		            <div className="food-dec">
		              <h4>Vegetables Burgers</h4>
		              <p>Toil and pain can procure food him some great pleasure to take a trivial</p>
		              <p className="price">$ 29.99</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-6">
		          <div className="single-regular-food d-flex justify-content-between align-items-center">
		            <div className="food-img">
		              <img src={publicUrl+"assets/img/food/06.jpg"} alt="Food" />
		            </div>
		            <div className="food-dec">
		              <h4>Vegetables Burgers</h4>
		              <p>Toil and pain can procure food him some great pleasure to take a trivial</p>
		              <p className="price">$ 29.99</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-6">
		          <div className="single-regular-food d-flex justify-content-between align-items-center">
		            <div className="food-img">
		              <img src={publicUrl+"assets/img/food/07.jpg"} alt="Food" />
		            </div>
		            <div className="food-dec">
		              <h4>Vegetables Burgers</h4>
		              <p>Toil and pain can procure food him some great pleasure to take a trivial</p>
		              <p className="price">$ 29.99</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-6">
		          <div className="single-regular-food d-flex justify-content-between align-items-center">
		            <div className="food-img">
		              <img src={publicUrl+"assets/img/food/08.jpg"} alt="Food" />
		            </div>
		            <div className="food-dec">
		              <h4>Vegetables Burgers</h4>
		              <p>Toil and pain can procure food him some great pleasure to take a trivial</p>
		              <p className="price">$ 29.99</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-6">
		          <div className="single-regular-food d-flex justify-content-between align-items-center">
		            <div className="food-img">
		              <img src={publicUrl+"assets/img/food/09.jpg"} alt="Food" />
		            </div>
		            <div className="food-dec">
		              <h4>Vegetables Burgers</h4>
		              <p>Toil and pain can procure food him some great pleasure to take a trivial</p>
		              <p className="price">$ 29.99</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-6">
		          <div className="single-regular-food d-flex justify-content-between align-items-center">
		            <div className="food-img">
		              <img src={publicUrl+"assets/img/food/10.jpg"} alt="Food" />
		            </div>
		            <div className="food-dec">
		              <h4>Vegetables Burgers</h4>
		              <p>Toil and pain can procure food him some great pleasure to take a trivial</p>
		              <p className="price">$ 29.99</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-12 text-center">
		          <a href="#" className="btn filled-btn">View More Food <i className="far fa-long-arrow-right" /></a>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


        }
}

export default FoodMenu