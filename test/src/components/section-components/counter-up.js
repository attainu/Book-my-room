import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CounterUP extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="counter-up primary-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/counter-bg.jpg)'}}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3 col-md-6">
		        <div className="counter-box style-two">
		          <div className="fact-icon">
		            <img src={publicUrl+"assets/img/icons/07.png"} alt="Icon" />
		          </div>
		          <p className="fact-num"><span className="counter-number">506</span></p>
		          <p>Luxury Appartment</p>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-6">
		        <div className="counter-box style-two">
		          <div className="fact-icon">
		            <img src={publicUrl+"assets/img/icons/08.png"} alt="Icon" />
		          </div>
		          <p className="fact-num"><span className="counter-number">352</span></p>
		          <p>Modern Bedroom</p>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-6">
		        <div className="counter-box style-two">
		          <div className="fact-icon">
		            <img src={publicUrl+"assets/img/icons/09.png"} alt="Icon" />
		          </div>
		          <p className="fact-num"><span className="counter-number">420</span></p>
		          <p>Win Int Awards</p>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-6">
		        <div className="counter-box style-two">
		          <div className="fact-icon">
		            <img src={publicUrl+"assets/img/icons/10.png"} alt="Icon" />
		          </div>
		          <p className="fact-num"><span className="counter-number">653</span>k</p>
		          <p>Cup Of coffee</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

        }
}

export default CounterUP