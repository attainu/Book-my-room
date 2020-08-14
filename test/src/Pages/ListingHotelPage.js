import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { GetHotelDetails, GetPhotosFromLoactionId } from "../Api";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "../CustomCss/ListingHotelpage.css"
import 'bootstrap/dist/css/bootstrap.css';
import GoogleMap from './../Comps/GoogleMap'
import { Spinner } from "react-bootstrap";






function ListingHotel(props) {
    function MyModal() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        var body = (<Carousel style={{width:"20%",maxHeight:"20px !important" }}>
            <Carousel.Item style={{width:"20%",maxHeight:"20px !important" }}>
                <img
                    className="d-block w-100"
                    src={photos ? photos.data[0].images.large.url : null}
                    alt="First slide"
                    style={{width:"20%",maxHeight:"20px !important" }}
                />

            </Carousel.Item>
            <Carousel.Item style={{width:"20%",maxHeight:"20px !important" }}>
                <img
                    className="d-block w-100"
                    src={photos ? photos.data[1].images.large.url : null}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{width:"20%",maxHeight:"20px !important" }}>
                <img
                    className="d-block w-100"
                    src={photos ? photos.data[2].images.large.url : null}
                    alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photos ? photos.data[3].images.large.url : null}
                    alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photos ? photos.data[4].images.large.url : null}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>);
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    View Details
      </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{body}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    var id = parseInt(props.match.params.id);
    const [photos, setPhotos] = useState(null);
    const [details, setDetails] = useState(null);
    if (id !== 0 && !id) {
        props.history.replace("/");

    }
    async function GetDetails(id) {
        var details = await GetHotelDetails(id);
        console.log(details);
        setDetails(details);
    }
    async function getPhotos(id) {

        var photos = await GetPhotosFromLoactionId(id);
        setPhotos(photos);
    }
    useEffect(() => { GetDetails(id); }, [setDetails])
    useEffect(() => { getPhotos(id); }, [setPhotos])

    //
    if (details) {
        return (
            <>

                <div class="container">
                    <div className="row">
                     <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photos ? photos.data[0].images.large.url : null}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photos ? photos.data[1].images.large.url : null}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photos ? photos.data[2].images.large.url : null}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photos ? photos.data[3].images.large.url : null}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photos ? photos.data[4].images.large.url : null}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">

                        </div>
                        <div class="col-4">
                            <div class="room-content">
                                <h2>{details.data[0].name}</h2>
                                <h4>{details.data[0].price} <span>/ Day</span></h4>
                                <div class="room-feature">
                                    <h6><span>Adress :</span>{details.data[0].address} </h6>
                                    <h6><span>Hotel Class:</span>{details.data[0].hotel_class}</h6>
                                    <h6><span>Description:</span>{details.data[0].description}</h6>

                                </div>
                                <MyModal />
                                <GoogleMap lat={details.data[0].latitude} lon={details.data[0].longitude} />
                                <a href="#" class="btn view-detail-btn btn-primary">Book Now <i class="fa fa-long-arrow-right"
                                    aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (<Spinner style={{position:"absolute",left:"50%",top:"50%"}} animation="border" />);
    }

}

export default ListingHotel;