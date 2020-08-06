import React from 'react';
import firebase from './../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useDispatch } from 'react-redux';
import {upadateLoggedIn} from './../actions';
import { useState } from 'react';

//ui
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';



function LogInComp({handleClose}){
    const [isLoggedIn,setLoggedIn]=useState(false);
    const dispatch = useDispatch();
    var uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.simpleAuth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: (user) => {
            dispatch(upadateLoggedIn(true));
        }
    }
    }

    async function Login() {
        var email = document.getElementById("emailLogin").value;
        var pass = document.getElementById("passLogin").value;
        try {
            await firebase.login(email,pass);
            dispatch(upadateLoggedIn(true));
            console.log("logged in");
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
                    Email
                </Form.Label>
                <Form.Control type="email"id="emailLogin" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password" id="passLogin" placeholder="Enter password" />
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth}
                    
                />
                <Button variant="primary" onClick={Login}>
                    Sign In
                </Button>
            </Modal.Footer>

        
        
        
        
        </>
    );
}
export default LogInComp;