import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import img from './../../assets/img/logo.png';

function WelcomePage({props}) {
    
    function LoginSignupPage() {
        console.log(props)
        props.history.replace("/login");
    }
    function NavBara() {

        return (
            
                
				<header>
 			  <div className="header-menu-area">
 			    <div className="container-fluid">
 			      <div className="row align-items-center">
 			        <div className="col-xl-3 col-lg-3 col-md-4 col-7">
 			          <div className="logo">
 			            <Link to="/"><img  src={img} alt="Avson" /></Link>
 			          </div>
 			        </div>
 			        <div className="col-xl-9 col-lg-9 col-md-8 col-5">
 			          <div className="menu-right-area text-right">
			            
 			            <nav className="main-menu">
 			              <ul className="list-inline">
 			                <li >
 			                  <Link to="/">Home</Link>
 			                </li>
 			                <li className="have-submenu">
 			                  <Link to="/room-list">Rooms</Link>
 			                  <ul className="submenu">
 			                    <li><Link to="/room-list">Room List</Link></li>
 			                    <li><Link to="/room-grid">Room Gird</Link></li>
 			                    <li><Link to="/room-details">Room Details</Link></li>
 			                  </ul>
 			                </li>
			               
 			                <li className="have-submenu">
 			                  <a href="#">Pages</a>
 			                  <ul className="submenu">
			                  
			                 
			                    
			                    
			                    
			                    
 			                    <li><Link to="/gallery">Gallery</Link></li>
 			                    <li><Link to="/contact">Contact</Link></li>
 			                    <li><Link to="/our-staff">Our Staff</Link></li>
 			                    <li><Link to="/resturent">Resturent</Link></li>
 			                    <li><Link to="/reservation">Reservation</Link></li>
 			                  </ul>
 			                </li>
 			                <li><Link to="/gallery">Gallery</Link></li>
 			                <li><Link to="/contact">Contact</Link></li>
 							<li><Link to="/login">Login/SignUp</Link></li>
 			              </ul>
 			            </nav>
			            
			           
 			          </div>
 			        </div>
 			      </div>
 			      <div className="mobilemenu" />
 			    </div>
 			  </div>
 			</header>
            
        );
    }

    return (
        <div>
            <NavBara/>
        </div>
    );
}


export default WelcomePage;






// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Navbar extends Component {

//     render() {
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         let imgattr = 'logo'
//         let anchor = '#'
//         return (
//             <header>
// 			  <div className="header-menu-area">
// 			    <div className="container-fluid">
// 			      <div className="row align-items-center">
// 			        <div className="col-xl-3 col-lg-3 col-md-4 col-7">
// 			          <div className="logo">
// 			            <Link to="/"><img  src={publicUrl+"assets/img/logo.png"} alt="Avson" /></Link>
// 			          </div>
// 			        </div>
// 			        <div className="col-xl-9 col-lg-9 col-md-8 col-5">
// 			          <div className="menu-right-area text-right">
			            
// 			            <nav className="main-menu">
// 			              <ul className="list-inline">
// 			                <li >
// 			                  <Link to="/">Home</Link>
// 			                </li>
// 			                <li className="have-submenu">
// 			                  <Link to="/room-list">Rooms</Link>
// 			                  <ul className="submenu">
// 			                    <li><Link to="/room-list">Room List</Link></li>
// 			                    <li><Link to="/room-grid">Room Gird</Link></li>
// 			                    <li><Link to="/room-details">Room Details</Link></li>
// 			                  </ul>
// 			                </li>
			               
// 			                <li className="have-submenu">
// 			                  <a href="#">Pages</a>
// 			                  <ul className="submenu">
			                  
			                 
			                    
			                    
			                    
			                    
// 			                    <li><Link to="/gallery">Gallery</Link></li>
// 			                    <li><Link to="/contact">Contact</Link></li>
// 			                    <li><Link to="/our-staff">Our Staff</Link></li>
// 			                    <li><Link to="/resturent">Resturent</Link></li>
// 			                    <li><Link to="/reservation">Reservation</Link></li>
// 			                  </ul>
// 			                </li>
// 			                <li><Link to="/gallery">Gallery</Link></li>
// 			                <li><Link to="/contact">Contact</Link></li>
// 							<li><Link to="/login">Login/SignUp</Link></li>
// 			              </ul>
// 			            </nav>
			            
			           
// 			          </div>
// 			        </div>
// 			      </div>
// 			      <div className="mobilemenu" />
// 			    </div>
// 			  </div>
// 			</header>

//         )
//     }
// }


// export default Navbar;