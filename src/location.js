// import React from 'react';
const fillLocation = () => {
  let location = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      function (result) {
        resolve(new window.google.maps.LatLng(result.coords.latitude, result.coords.longitude))
      })
  })
  return location;
}
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
async function initMap(callback) {
  fillLocation()
  // Create the map.
  var pyrmont = await fillLocation()
  // console.log(pyrmont)
  map = new window.google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 17
  });

 callback(map, pyrmont);
}


export default initMap;
// export default getLocation;