import React from 'react';
import "./../CustomCss/SearchBar.css";

import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';
import { GetHotelList } from './../Api';
import { upadateLoggedIn } from './../actions'
import { useDispatch } from 'react-redux';
import { upadateFetchedDataFromApi } from './../actions';
import Grid from '@material-ui/core/Grid'

function SearchBar() {
    const dispatch = useDispatch();
    const [key, setKey] = useState("hotels");
    const [searchHotel, setSearchHotel] = useState("");
    const [searchRest, setSearchRest] = useState("");
    const [searchAtr, setSearchAtr] = useState("");


    function FetchHotelsList() {
        document.getElementById("searchHotelsBtn").disabled = true;
        dispatch(upadateFetchedDataFromApi(null));
        GetHotelList(searchHotel);
        document.getElementById("searchHotelsBtn").disabled = false;
    }
    async function GetHotelList(city) {


        var location_id = await GetCityId(city);
        var url = `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${location_id}&adults=1&checkin=%3Crequired%3E&rooms=1&nights=2`;

        var options = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "aef497bcd0mshf0aaea89b1d71efp10b122jsn32a60ff4e740"
            }
        };
        var res = await fetch(url, options);
        var data = await res.json();

        console.log(data);
        dispatch(upadateFetchedDataFromApi(data.data));


    }
    async function GetCityId(city) {

        city = city.replace(" ", "%20");

        var url = `https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=km&query=${city}`


        var options = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "aef497bcd0mshf0aaea89b1d71efp10b122jsn32a60ff4e740"
            }
        };
        var res = await fetch(url, options);
        var data = await res.json();

        console.log(data);
        var loc_id;
        for (const i of data.data) {
            if (i.result_type == "geos") {
                loc_id = i.result_object.location_id;
                break;
            }
        }
        return loc_id;

    }
    return (
        <>
            <Tabs id="controled-tabs-example"
                activeKey={key}
                onSelect={(k) => { setKey(k) }}
                style={{ justifyContent: "center", paddingTop: "20px" }}
            >
                <Tab eventKey="hotels" title="Hotels">
                    <div id="booking" class="section">
                        <div class="section-center">
                            <div class="container">


                                <div class="booking-form" >
                                    <Grid container >
                                        <Grid item xs={12}>
                                            <div class="form-group">
                                                <input class="form-control" type="text" placeholder="Enter city " id="search" />
                                                <span class="form-label">Destination</span>
                                            </div>
                                        </Grid>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                                <span class="form-label">Guests</span>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                                <span class="form-label">Children</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Check In</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Check out</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-btn">
                                                <button class="submit-btn" onClick={(e)=>{e.preventDefault(); GetHotelList(document.getElementById("search").value)}}>Check availability</button>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>


                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="attractions" title="Atrractions">
                    <div id="booking" class="section">
                        <div class="section-center">
                            <div class="container">


                                <div class="booking-form" >
                                    <Grid container >
                                        <Grid item xs={12}>
                                            <div class="form-group">
                                                <input class="form-control" type="text" placeholder="Enter Address, zip, city or airport" />
                                                <span class="form-label">Destination</span>
                                            </div>
                                        </Grid>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                                <span class="form-label">Guests</span>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                                <span class="form-label">Children</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Check In</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Check out</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-btn">
                                                <button class="submit-btn">Check availability</button>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>


                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="restaurants" title="Restaurants">
                    <div id="booking" class="section">
                        <div class="section-center">
                            <div class="container">


                                <div class="booking-form" >
                                    <Grid container >
                                        <Grid item xs={12}>
                                            <div class="form-group">
                                                <input class="form-control" type="text" placeholder="Enter Address, zip, city or airport" />
                                                <span class="form-label">Destination</span>
                                            </div>
                                        </Grid>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                                <span class="form-label">Guests</span>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                                <span class="form-label">Children</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Check In</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Check out</span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-btn">
                                                <button class="submit-btn">Check availability</button>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>


                            </div>
                        </div>
                    </div>
                </Tab>

            </Tabs>
        </>
    );
}
export default SearchBar;
