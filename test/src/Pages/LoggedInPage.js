import React, { useState } from 'react';
import firebase from './../firebase'
import { upadateLoggedIn } from './../actions'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from './../assets/img/logo.png';
import HomeV2 from '../components/homev2';


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
                                    
                                        <li><Link to="/contact">Contact</Link></li>
                                       
                                            <li><Link> {firebase.auth.currentUser.displayName}</Link></li>
                                            <li><Link  onClick={LogOut}>Log Out</Link></li>  
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
    if (!isLogged) {
        props.history.replace("/");
    }
    return (
        <div>
            <NavBar />
            <HomeV2/>

        </div>
    );
}
export default WelcomePage;