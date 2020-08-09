import React from 'react';
import { upadateFetchedDataFromApi } from './actions';
import { useDispatch } from 'react-redux';




export  async function GetHotelList(city) {

    const dispatch = useDispatch()
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
    var data =  await res.json();

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

async function GetHotelDetails(location_id){
    var url = `https://tripadvisor1.p.rapidapi.com/hotels/get-details?adults=1&nights=2&currency=USD&lang=en_US&child_rm_ages=7%252C10&checkin=2020-01-15&location_id=${location_id}`;
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

async function GetPhotosFromLoactionId(location_id){
    var url = `https://tripadvisor1.p.rapidapi.com/photos/list?lang=en_US&currency=USD&limit=50&location_id=${location_id}`;
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