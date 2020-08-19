export async function detail(id) {
  var url = `https://tripadvisor1.p.rapidapi.com/hotels/get-details?location_id=${id}&currency=USD`;
  var options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": "9253d19d72msh749941b407659dap126f96jsn65ceb8c2fc53",
    },
  };
  var res = await fetch(url, options);
  var data = await res.json();
  return data.data[0];
}

export async function photosDetail(id) {
  var url = `https://tripadvisor1.p.rapidapi.com/photos/list?lang=en_US&currency=USD&limit=4&location_id=${id}`;
  var options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": "9253d19d72msh749941b407659dap126f96jsn65ceb8c2fc53",
    },
  };
  var res = await fetch(url, options);
  var data = await res.json();
  var photo1 = data.data[0];
  var photo2 = data.data[1];
  var photo3 = data.data[2];
  var photo4 = data.data[3];
  var object = {
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4,
  };
  return object;
}
