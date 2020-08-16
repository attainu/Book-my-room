import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <section className="blog-wrapper section-padding section-bg">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        {/* Blog Post Loop */}
		        <div className="post-loop avson-go-top">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/01.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-user-alt" />Somalia Alexz</Link>
		                </li>
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">CSS Grid Challenge Build A Template, Win Some
		                  Smashing Prizes!</Link></h3>
		              <Link to="/blog-details" className="btn filled-btn">View post <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		          <div className="single-blog-wrap video-post">
		            <div className="post-thumbnail">
		              <img src="assets/img/blog/02.jpg" alt="Image" />
		              <Link to="/blog-detailsube.com/watch?v=NpEaa2P7qZI" className="video-popup"> <i className="fas fa-play" /></Link>
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-user-alt" />Somalia Alexz</Link>
		                </li>
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Building Pattern Libraries With Shadow Dom in
		                  Markdown</Link></h3>
		              <Link to="/blog-details" className="btn filled-btn">View post <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		          <div className="single-blog-wrap quote-post">
		            <div className="post-desc">
		              <h3><Link to="/blog-details">Web Development Reading List One Real-World
		                  Accessibility, Flexbox Madness And The Ephemerality Things Build</Link></h3>
		              <p className="quote-v">Zakia X Petel</p>
		            </div>
		          </div>
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/03.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-user-alt" />Somalia Alexz</Link>
		                </li>
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Challenge Yourself More Often By Creating Artwork
		                  Every Day Shadow Markdown</Link></h3>
		              <Link to="/blog-details" className="btn filled-btn">View post <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/04.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-user-alt" />Somalia Alexz</Link>
		                </li>
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Things To Keep In Mind When Designing Transportation
		                  Map Weather</Link></h3>
		              <Link to="/blog-details" className="btn filled-btn">View post <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        {/* Pagination Wrap */}
		        <div className="pagination-wrap">
		          <ul className="list-inline">
		            <li><a href="#"><i className="far fa-angle-left" /></a></li>
		            <li className="active"><a href="#">01</a></li>
		            <li><a href="#">02</a></li>
		            <li><a href="#">03</a></li>
		            <li><a href="#"><i className="far fa-angle-right" /></a></li>
		          </ul>
		        </div>
		      </div>
		     	<Sidebar />
		    </div>
		  </div>
		</section>

    )
  }
}

export default BlogList;
