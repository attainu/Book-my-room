import React from 'react';
import firebase from './../firebase';

import { useDispatch } from 'react-redux';
import {upadateLoggedIn} from './../actions';
import { useState } from 'react';

//ui
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';

function SingUpComp({handleClose}) {
    async function Register() {
        var email = document.getElementById("emailRegister").value;
        var pass = document.getElementById("passRegister").value;
        var name = document.getElementById("nameRegister").value;
        try {
            
            await firebase.register(email,pass,name);
        } catch (error) {
            alert(error.message);
        }
        handleClose();
        
    }

    return (
        <>
            <Modal.Body>          
            <Form>
            <Form.Group as={Col}>
                <Form.Label>
                    Full Name
                </Form.Label>
                <Form.Control type="text" id="nameRegister" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type="email" id="emailRegister" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password" id="passRegister" placeholder="Enter password" />
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={Register}>
                    Sign Up
                </Button>
            </Modal.Footer>
        </>
    );
}
export default SingUpComp;