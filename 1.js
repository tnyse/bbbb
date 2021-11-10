// The following example creates complex markers to indicate business near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.7,
    center: {
      lat: 35.106766,
      lng: -106.629181
    }

  });
   map.setTilt(50);


  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  script.src = 'https://spreadsheets.google.com/feeds/list/1LWA2-LJ_KOXu2frtYK2_hgyOa4DJLxWVO4D9SlAg-dA/2/public/values?alt=json';
  // document.getElementsByTagName('entry')[0].appendChild(script);

  console.log()



  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
// var business = [
//   ["Bondi biz", 35.09158646553254, -106.51511244742083, 4],
//   ["Coogee biz", 35.09327195851299, -106.61295943228411, 5],
//   ["Cronulla biz", 35.11967346644456, -106.50343947378802, 3],
//   ["Manly biz", 35.10900154626711, -106.63287215201068, 2],
//   ["Maroubra biz", 35.10197978390736, -106.62497572867083, 1]
// ];

var business = [
  ["Bondi biz", 35.09158646553254, -106.51511244742083, 4],
  ["Coogee biz", 35.09327195851299, -106.61295943228411, 5],
  ["Cronulla biz", 35.11967346644456, -106.50343947378802, 3],
  ["Manly biz", 35.10900154626711, -106.63287215201068, 2],
  ["Maroubra biz", 35.10197978390736, -106.62497572867083, 1]
];



function setMarkers(map) {
  // Adds markers to the map.


  for (var i = 0; i < business.length; i++) {
    var biz = business[i];
    var iconBase = './';
    //add info window
    var contentString =
      '<div id="content">' +
      desc
    "</div>";
    var desc = biz[i];

    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    // var infoWindow = new google.maps.InfoWindow(), marker, i;

    var marker = new google.maps.Marker({
      position: {
        lat: biz[1],
        lng: biz[2]
      },
      map: map,
      icon: iconBase + 'blackspot.png',
      animation: google.maps.Animation.DROP,
      // shape: shape,
      label: biz[0],
      zIndex: biz[3],
      labelOrigin: new google.maps.Point(9, 9)
    });

    // info window listener
    marker.addListener("click", function() {
       // infoWindow.setContent(business[3]);
       infoWindow.setContent(desc);
      infoWindow.open(map, marker);
    });



  }


} //end setMarkers
// Load initialize function
// get data from json here

// fetch('https://spreadsheets.google.com/feeds/list/1LWA2-LJ_KOXu2frtYK2_hgyOa4DJLxWVO4D9SlAg-dA/2/public/values?alt=json')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data);
//     // Work with JSON data here
//   })
//   .catch((err) => {
//     // Do something for an error here
//   })

//end