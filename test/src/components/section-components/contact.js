import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="contact-section section-padding">
		  <div className="container">
		    <div className="row align-items-center no-gutters">
		      <div className="col-lg-6">
		        <div className="mapouter">
			 		 <div style={{overflow: 'hidden', width: '585px', position: 'relative'}}><iframe width={585} height={580} src="https://maps.google.com/maps?width=1920&height=670&hl=en&q=delhi%2C%20United%20Kingdom+(Title)&ie=UTF8&t=&z=10&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><div style={{position: 'absolute', width: '80%', bottom: '10px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', color: '#000', textAlign: 'center'}}><small style={{lineHeight: '1.8', fontSize: '2px', background: '#fff'}}>Powered by <a href="https://embedgooglemaps.com/es/">Embedgooglemaps ES</a> &amp; <a href="https://www.jubler.org/">increase website traffic</a></small></div><style dangerouslySetInnerHTML={{__html: "#gmap_canvas img{max-width:none!important;background:none!important}" }} /></div><br />
		        </div>

		      </div>
		      <div className="col-lg-5 offset-lg-1">
		        {/* Section Title */}
		        <div className="section-title">
		          <span className="title-top with-border">Have A Coffee </span>
		          <h1>Don’t Hesitate To Contact With Us</h1>
		          <p>Provident, similique sunt in culpa qui officia deserunt mollitia animie est laborum et
		            dolorum fuga harum quidem</p>
		        </div>
		        <div className="contact-box wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="400ms">
		          <ul>
		            <li><i className="far fa-map-marker-alt" />205 Main Road,Delhi</li>
		            <li>
		              <a >
		                <i className="far fa-envelope-open" />supportinfo@gmail.com
		              </a>
		            </li>
		            <li><a ><i className="far fa-phone" />9987376149</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
        }
}

export default Contact