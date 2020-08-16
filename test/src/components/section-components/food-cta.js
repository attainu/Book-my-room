import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FoodCta extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="food-cta bg-img-center avson-go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/food/food-cta.jpg)'}}>
		  <div className="container">
		    <div className="food-cta-text">
		      <h1>Special Offer <span>For Burgers</span></h1>
		      <Link to="/service" className="btn filled-btn">SHOP NOW <i className="far fa-long-arrow-right" /></Link>
		    </div>
		  </div>
		  <h1 className="big-text">
		    Burgers
		  </h1>
		</section>

        }
}

export default FoodCta