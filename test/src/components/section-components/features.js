import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import img from '../../images/314.jpg'

class Features extends Component {

    render() {

       

    return <section className="wcu-section section-bg section-padding">
		  <div className="container">
		    <div className="row align-items-center">
		      <div className="col-lg-5 offset-lg-1">
		        {/* Section Title */}
		        <div className="feature-left">
		          <div className="section-title">
		            <span className="title-top with-border">Why Choose Us</span>
		            <h1>We Care You &amp; We Feel What’s Needs For Good Living</h1>
		          </div>
		          <ul className="feature-list">
		            <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="0ms">
		              <div className="feature-icon"><i className="far fa-cocktail" /></div>
		              <h4>Relex Living</h4>
		              <p>Dreat explorer of the truth, the master-builder of human happines one rejects,
		                dislikes avoids</p>
		            </li>
		            <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="200ms">
		              <div className="feature-icon"><i className="far fa-box-full" /></div>
		              <h4>High Security System</h4>
		              <p>Procure him some great pleasure. To take a trivial example, which of us ever
		                undertakes labor</p>
		            </li>
		            <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="300ms">
		              <div className="feature-icon"><i className="far fa-music" /></div>
		              <h4>Such Events &amp; Party</h4>
		              <p>Libero tempore, cum soluta nobis est eligenoptio cumque nihil impedit quo minus
		                id quod </p>
		            </li>
		          </ul>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="feature-img">
		          <div className="feature-abs-con">
		            <div className="f-inner">
		              <i className="far fa-stars" />
		              <p>Popular Features</p>
		            </div>
		          </div>
		          <img src={img}alt="Image" />
		        </div>
		      </div>
		    </div>
		  </div>
		</section>



        }
}

export default Features