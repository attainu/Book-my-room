import React, { useState } from 'react';
import firebase from './../firebase'
import { upadateLoggedIn } from './../actions'
import { useDispatch, useSelector } from 'react-redux';



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
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">Home Seaker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    
                        
                            {firebase.auth.currentUser.displayName}
                        
                        <Button onClick={LogOut}>Log Out</Button>
                    
                    
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
function WelcomePage(props) {
    if(!firebase.auth.currentUser.displayName){
        props.history.replace("/");
    }
    var isLogged = useSelector(state=>state.isLogged);
    if(!isLogged){
        props.history.replace("/");
    }
    return (
        <div>
            <NavBar />
        </div>
    );
}
export default WelcomePage;