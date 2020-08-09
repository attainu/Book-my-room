import React from "react";
import { Redirect } from 'react-router-dom';
import { GetHotelList } from "../Api";
import "../CustomCss/ListingHotelpage.css"

async function GetHotelDetails(location_id) {
    var url = `https://tripadvisor1.p.rapidapi.com/hotels/get-details?location_id=${location_id}`;
    var options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "20356d53e0mshbafae165f73c7d3p1e7b88jsncbc902a721e1"
        }
    };
    var res = await fetch(url, options);
    var data = await res.json();
    console.log(data);
}

function ListingHotel(props) {
    console.log(props);
    var id = parseInt(props.match.params.id)
    if (id !== 0 && !id) {
        props.history.replace("/");
    }
    GetHotelDetails(id);
    return (<>
        <div class="room-content">
            <h2>Room Vip King</h2>
            <h4>400$ <span>/ Day</span></h4>
            <div class="room-feature">
                <h6>Size: <span>30 ft</span></h6>
                <h6>Capacity: <span>Max persion 5</span></h6>
                <h6>Bed: <span>King beds</span></h6>
                <h6>Services: <span>Wifi, television ...</span></h6>
            </div>
            <a href="#" class="btn view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
    </>);
}

export default ListingHotel;