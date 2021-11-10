function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'

    };
// console.log(url);
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);


    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Brooklyn Museum, NY', 35.09158646553254, -106.51511244742083, 'one'],
        ['Brooklyn Public Library, NY', 35.09327195851299, -106.61295943228411, 'two'],
        ['Prospect Park Zoo, NY', 35.11967346644456, -106.50343947378802, 'tree']
    ];
    // var markers = newmarkers.feed.entry[i];
    // Info window content
    // var infoWindowContent = [
    //     ['<div class="info_content">' +
    //     '<h3>Brooklyn Museum</h3>' +
    //     '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
    //     ['<div class="info_content">' +
    //     '<h3>Brooklyn Public Library</h3>' +
    //     '<p>The Brooklyn Public Library (BPL) is the public library system of the borough of Brooklyn, in New York City.</p>' +
    //     '</div>'],
    //     ['<div class="info_content">' +
    //     '<h3>Prospect Park Zoo</h3>' +
    //     '<p>The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
    //     '</div>']
    // ];

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    // Place each marker on the map  
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        var iconBase = './';

        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: iconBase + 'blackspot.png',
            animation: google.maps.Animation.DROP,
            label: markers[i][0],
            title: markers[i][0]
        });


        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(markers[i][3]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(12.7);
        google.maps.event.removeListener(boundsListener);
    });

}