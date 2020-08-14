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
            "x-rapidapi-key": "aef497bcd0mshf0aaea89b1d71efp10b122jsn32a60ff4e740"
        }
    };
    var res = await fetch(url, options);
    var data =  await res.json();

    console.log(data);
    dispatch(upadateFetchedDataFromApi(data.data));
    

}





async function GetCityId(city) {

    city = city.replace(" ", "%20");
    
    //location auto complite
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

    
    var loc_id;
    for (const i of data.data) {
        if (i.result_type == "geos") {
            loc_id = i.result_object.location_id;
            break;
        }
    }
    return loc_id;

}

export async function GetHotelDetails(location_id){
    var url = `https://tripadvisor1.p.rapidapi.com/hotels/get-details?location_id=${location_id}&currency=INR`;
    var options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "aef497bcd0mshf0aaea89b1d71efp10b122jsn32a60ff4e740"
        }
    };
    var res = await fetch(url, options);
    var data = await res.json();
    
    return data;
}

export async function GetPhotosFromLoactionId(location_id){
    var url = `https://tripadvisor1.p.rapidapi.com/photos/list?lang=en_US&currency=INR&limit=50&location_id=${location_id}`;
    var options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "aef497bcd0mshf0aaea89b1d71efp10b122jsn32a60ff4e740"
        }
    };
    var res = await fetch(url, options);
    var data = await res.json();
    
    return data;
}