import React, { useState } from "react";
import LogIn from "./../Comps/LoginForm";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SingUpComp from "../Comps/RegisterForm";
import ListingItem from "./../Comps/ListingItem";

import { usePromiseTracker } from "react-promise-tracker";

function NavBar() {
  function ModalSingUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <SingUpComp />
        </Modal>
      </>
    );
  }
  function ModalSingIn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Nav.Link onClick={handleShow}>Sign In</Nav.Link>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <LogIn handleClose={handleClose} />
        </Modal>
      </>
    );
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
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <ModalSingIn />
          <ModalSingUp />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Listings() {
  const { promiseInProgress } = usePromiseTracker();
  var data = Api();

  return <div></div>;
}
async function Api() {}

function WelcomePage() {
  return (
    <div>
      <NavBar />
      <Listings />
    </div>
  );
}
export default WelcomePage;
