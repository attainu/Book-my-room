import React from 'react';
import "./../CustomCss/SearchBar.css";
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';
import { GetHotelList } from './../Api';
import { upadateLoggedIn } from './../actions'
import { useDispatch } from 'react-redux';
import { upadateFetchedDataFromApi } from './../actions';

function SearchBar() {
    const dispatch = useDispatch();
    const [key, setKey] = useState("hotels");
    const [searchHotel, setSearchHotel] = useState("");
    const [searchRest, setSearchRest] = useState("");
    const [searchAtr, setSearchAtr] = useState("");

    GetHotelList("Delhi");
    function FetchHotelsList() {
        document.getElementById("searchHotelsBtn").disabled=true;
        dispatch(upadateFetchedDataFromApi(null));
        GetHotelList(searchHotel);
        document.getElementById("searchHotelsBtn").disabled=false;
    }
    async function GetHotelList(city) {

        
        var location_id = await GetCityId(city);
        var url = `https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${location_id}&adults=1&checkin=%3Crequired%3E&rooms=1&nights=2`;
        //var url="https://cat-fact.herokuapp.com/facts";
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
        dispatch(upadateFetchedDataFromApi(data.data));


    }
    async function GetCityId(city) {

        city = city.replace(" ", "%20");
        //location search
        //var url = `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${city}`;
        //location auto complite
        var url = `https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=km&query=${city}`

        //var url="https://cat-fact.herokuapp.com/facts";
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
                    <div className="s002">
                        <form>

                            <div className="inner-form">
                                <div className="input-field first-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                        </svg>
                                    </div>
                                    <input id="search" type="text" value={searchHotel} onChange={(v) => { setSearchHotel(v.target.value) }} placeholder="Enter City To Search Hotels" />

                                </div>

                                <div className="input-field second-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input className="datepicker" id="depart" type="text" placeholder="29 Aug 2018" />
                                </div>
                                <div className="input-field third-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input className="datepicker" id="return" type="text" placeholder="30 Aug 2018" />
                                </div>
                                <div className="input-field fouth-wrap" >
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                        </svg>
                                    </div>
                                    <select data-trigger="" name="choices-single-defaul">
                                        <option placeholder="">2 Adults</option>
                                        <option>3 Adults</option>
                                        <option>4 Adults</option>
                                        <option>5 Adults</option>
                                    </select>
                                </div>
                                <div className="input-field fifth-wrap">
                                    <button className="btn-search" onClick={FetchHotelsList} id="searchHotelsBtn" type="button">SEARCH</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Tab>
                <Tab eventKey="attractions" title="Atrractions">
                    <div className="s002">
                        <form>

                            <div className="inner-form">
                                <div className="input-field first-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                        </svg>
                                    </div>
                                    <input id="search" type="text" placeholder="Enter City To Search Attractions" />
                                </div>
                                <div className="input-field second-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input className="datepicker" id="depart" type="text" placeholder="29 Aug 2018" />
                                </div>
                                <div className="input-field third-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input className="datepicker" id="return" type="text" placeholder="30 Aug 2018" />
                                </div>
                                <div className="input-field fouth-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                        </svg>
                                    </div>
                                    <select data-trigger="" name="choices-single-defaul">
                                        <option placeholder="">2 Adults</option>
                                        <option>3 Adults</option>
                                        <option>4 Adults</option>
                                        <option>5 Adults</option>
                                    </select>
                                </div>
                                <div className="input-field fifth-wrap">
                                    <button className="btn-search" type="button">SEARCH</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Tab>
                <Tab eventKey="restaurants" title="Restaurants">
                    <div className="s002">
                        <form>

                            <div className="inner-form">
                                <div className="input-field first-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                        </svg>
                                    </div>
                                    <input id="search" type="text" placeholder="Enter City To Search Restaurants" />
                                </div>
                                <div className="input-field second-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input className="datepicker" id="depart" type="text" placeholder="29 Aug 2018" />
                                </div>
                                <div className="input-field third-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                        </svg>
                                    </div>
                                    <input className="datepicker" id="return" type="text" placeholder="30 Aug 2018" />
                                </div>
                                <div className="input-field fouth-wrap">
                                    <div className="icon-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                        </svg>
                                    </div>
                                    <select data-trigger="" name="choices-single-defaul">
                                        <option placeholder="">2 Adults</option>
                                        <option>3 Adults</option>
                                        <option>4 Adults</option>
                                        <option>5 Adults</option>
                                    </select>
                                </div>
                                <div className="input-field fifth-wrap">
                                    <button className="btn-search" type="button">SEARCH</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Tab>

            </Tabs>
        </>
    );
}
export default SearchBar;
