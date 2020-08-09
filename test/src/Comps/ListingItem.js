import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import {Redirect} from 'react-router-dom';


function Listing(props) {
    const [redirect,setRedirect]=useState(false);
    
    if(redirect){
        return <Redirect to={`/hotel/${props.id}`} />
    }else{
        return(
        <Card style={{ width: '18rem',padding:"10px",margin:"10px" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Price Range : {props.price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link style={{cursor:"pointer"}} onClick={()=>{setRedirect(true)}}>Visit Hotel Page</Card.Link>
            </Card.Body>
        </Card>
    );
    }
    
}

export default Listing;