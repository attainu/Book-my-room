import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyCooseUsSingle extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="wcu-section section-padding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        {/* Section Title */}
        <div className="section-title">
          <span className="title-top">Why Choose Us</span>
          <h1>Since1990 We Provides <br /> Professional Service</h1>
        </div>
        <div className="feature-accordion accordion" id="featureAccordion">
          <div className="card">
            <div className="card-header ">
              <button type="button" className="active-accordion" data-toggle="collapse" data-target="#featureOne">
                Why Choose Our Product ?
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureOne" className="collapse show" data-parent="#featureAccordion">
              <div className="card-body">
                But must explain to you how all this mistaken idea denounie pleasure and
                praising pain was borand omnis dolor Tempbus autem officiis debitis rerum
                necessitatibus saepe
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <button type="button" data-toggle="collapse" data-target="#featureTwo">
                Meet Respond Testing To Make Build ?
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureTwo" className="collapse" data-parent="#featureAccordion">
              <div className="card-body">
                But must explain to you how all this mistaken idea denounie pleasure and
                praising pain was borand omnis dolor Tempbus autem officiis debitis rerum
                necessitatibus saepe
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <button type="button" data-toggle="collapse" data-target="#featureThree">
                CSS Grid Challenge: Build A Template ?
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureThree" className="collapse" data-parent="#featureAccordion">
              <div className="card-body">
                But must explain to you how all this mistaken idea denounie pleasure and
                praising pain was borand omnis dolor Tempbus autem officiis debitis rerum
                necessitatibus saepe
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <button type="button" data-toggle="collapse" data-target="#featureFour">
                Dwelling Past The Importance Project ?
                <span className="open-icon"><i className="far fa-eye-slash" /></span>
                <span className="close-icon"><i className="far fa-eye" /></span>
              </button>
            </div>
            <div id="featureFour" className="collapse" data-parent="#featureAccordion">
              <div className="card-body">
                But must explain to you how all this mistaken idea denounie pleasure and
                praising pain was borand omnis dolor Tempbus autem officiis debitis rerum
                necessitatibus saepe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="feature-accordion-img text-right">
          <img src={publicUrl+"assets/img/tile-gallery/03.jpg"} alt="Image" />
          <div className="degin-shape">
            <div className="shape-one">
              <img src={publicUrl+"assets/img/shape/11.png"} alt="Shape" />
            </div>
            <div className="shape-two">
              <img src={publicUrl+"assets/img/shape/12.png" }alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        }
}

export default WhyCooseUsSingle