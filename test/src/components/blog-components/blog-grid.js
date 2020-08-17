import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogGrid extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <section className="blog-wrapper blog-gird-view section-padding section-bg">
		  <div className="container">
		    <div className="post-loop avson-go-top">
		      <div className="row">
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-01.jpg" }alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">CSS Grid Challenge Build A Template, Win Some
		                  Smashing Prizes!</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-02.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">We're Touring Through Southeast Asia: Join The
		                  Mozilla Develop Road</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-03.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Why Switched To Sketch For UI Design (And Never
		                  Looked Back) </Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-04.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">CSS Grid Challenge Build A Template, Win Some
		                  Smashing Prizes!</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-05.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">We're Touring Through Southeast Asia: Join The
		                  Mozilla Develop Road</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-06.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Why Switched To Sketch For UI Design (And Never
		                  Looked Back) </Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-07.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">CSS Grid Challenge Build A Template, Win Some
		                  Smashing Prizes!</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-08.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">We're Touring Through Southeast Asia: Join The
		                  Mozilla Develop Road</Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="single-blog-wrap">
		            <div className="post-thumbnail">
		              <img src={publicUrl+"assets/img/blog/gird-09.jpg"} alt="Image" />
		            </div>
		            <div className="post-desc">
		              <ul className="blog-meta list-inline">
		                <li><Link to="/blog-details"><i className="far fa-calendar-alt" />20 jan
		                    2020</Link></li>
		              </ul>
		              <h3><Link to="/blog-details">Why Switched To Sketch For UI Design (And Never
		                  Looked Back) </Link></h3>
		              <Link to="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
		            </div>
		          </div>
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
		</section>

    )
  }
}

export default BlogGrid;
