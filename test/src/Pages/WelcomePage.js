import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SingUpComp from '../Comps/RegisterForm';
import ListingItem from './../Comps/ListingItem';
import Container from 'react-bootstrap/Container';

import { usePromiseTracker } from 'react-promise-tracker';



import { Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { upadateFetchedDataFromApi } from '../actions';

import SearchBar from './../Comps/SearchBar';





function Listings() {
    var data = useSelector(state => state.dataFromApi);
    
    //var data = [{name:"heelo",id:0},{name:"bojure",id:1}]
    return (
        <div style={{ alignItems: "center", alignContent: "center", alignText: "center" }}>
            <Container style={{ alignItems: "center", alignConten: "center", alignText: "center" }}>
                <Row style={{ textAlign: "center", justifyContent: "center" }}>
                    {data!==null ? data.map((i) => {
                        return <ListingItem key={i.id} title={i.name} img={i.photo.images.medium.url}
                        price={i.price} id={i.location_id} />
                    }) : <Spinner animation="border"   />}
                </Row>
            </Container>
        </div>
    );
}





function WelcomePage(props) {
    
    function LoginSignupPage() {

        props.history.replace("/login");
    }
    function NavBar() {


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
                        <Nav.Link onClick={LoginSignupPage}>Sing in/Sing up</Nav.Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }


    return (
        <div>
            <NavBar />
            <SearchBar />
            <Listings />


        </div>
    );
}


export default WelcomePage;