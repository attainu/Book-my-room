import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
        let Img = this.props.Img ? this.props.Img :'bg//breadcrumb-01.jpg'

        return (
            <section className="breadcrumb-area d-flex align-items-center position-relative bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/'+Img+')'}}>
			  <div className="container">
			    <div className="breadcrumb-content text-center">
			      <h1>{ HeaderTitle }</h1>
			      <ul className="list-inline">
			        <li><Link to="/">Home</Link></li>
			        <li><i className="far fa-angle-double-right" /></li>
			        <li>{ Subheader }</li>
			      </ul>
			    </div>
			  </div>
			  <h1 className="big-text">
			    Room
			  </h1>
			</section>

        )
    }
}


export default Page_header