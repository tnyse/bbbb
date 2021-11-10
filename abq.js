var map;
function initMap() {


	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 35.106766, lng: -106.629181 },
		zoom: 12.7,
		streetViewControl: false
	});


	// get data from json here

	fetch('https://spreadsheets.google.com/feeds/list/1LWA2-LJ_KOXu2frtYK2_hgyOa4DJLxWVO4D9SlAg-dA/2/public/values?alt=json')
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			// Work with JSON data here

		})
		.catch((err) => {
			// Do something for an error here
		})

	//end 

	function dropMarker(latitude, longitude, title) {
		var location = { lat: markers[i].gsx$latitude, lng: markers[i].gsx$longitude };
		var contentString = "<h4>" + markers[i].gsx$nameofbusiness + "</h4>";
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		var marker = new google.maps.Marker({ position: location, map: map, title: title });
		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
		let markers = data.feed.entry;

		var address = markers.gsx$location;
		for (var i = 0; i < markers.length; i++) {
			let title = markers[i].gsx$nameofbusiness;
			let address = markers[i].gsx$location;
			let latitude = markers[i].gsx$latitude;
			let longitude = markers[i].gsx$longitude;
			var placement = {
				latitude: markers[i].gsx$latitude.values,
				longitude: markers[i].gsx$longitude.values
			};
			console.log(markers[i].gsx$address);
			// var marker = new google.maps.Marker({position: placement, map: map});

			// dropMarker(latitude, longitude, title);


		}



	}


	var myLatLng = {
		lat: 35.106766,
		lng: -106.629181
	};



	var iconBase = './';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: iconBase + 'blackspot.png',
		title: 'Hello World!'
	});




}