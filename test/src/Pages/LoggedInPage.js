import React, { useState } from 'react';
import firebase from './../firebase'
import { upadateLoggedIn } from './../actions'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from './../assets/img/logo.png';



import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


function NavBar(props) {
    const dispatch = useDispatch();

    function LogOut() {
        firebase.logout();
        dispatch(upadateLoggedIn(false));
    }

    return (

        <header>
            <div className="header-menu-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-7">
                            <div className="logo">
                                <Link to="/"><img src={img} alt="Avson" /></Link>
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

                                        <li><Link to="/contact">Contact</Link></li>
                                       
                                            <Button> {firebase.auth.currentUser.displayName}</Button>

                                            <Button onClick={LogOut}>Log Out</Button>
                                      
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
function WelcomePage(props) {
    if (!firebase.auth.currentUser.displayName) {
        props.history.replace("/");
    }
    var isLogged = useSelector(state => state.isLogged);
    if (isLogged) {
        props.history.replace("/");
    }
    return (
        <div>
            <NavBar />
        </div>
    );
}
export default WelcomePage;