$(document).ready(function() {

    var userOrigin = {
        lat: 41.85,
        lng: -87.65
    };
    var userDestination = {
        lat: 39.79,
        lng: -86.14
    };
    var distance = 0;
    var distanceValue = 0;
    var duration = 0;

    window.initMap = function() {

        var map = new google.maps.Map(document.getElementById('map'), {
            center: userOrigin,
            scrollwheel: false,
            zoom: 7
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });

        // Set destination, origin and travel mode.
        var request = {
            destination: userDestination,
            origin: userOrigin,
            travelMode: 'BICYCLING'
        }

        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [userOrigin],
            destinations: [userDestination],
            travelMode: 'BICYCLING',
            transitOptions: null,
            drivingOptions: null,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: true,
            avoidTolls: false,
        }, callback);

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
            if (status == 'OK') {
                // Display the route on the map.
                directionsDisplay.setDirections(response);
            }
        });

    }

    function callback(response, status) {
        if (status == 'OK') {
            var results = response.rows[0].elements;
            distance = results[0].distance.text;
            distanceValue = results[0].distance.value;
            duration = results[0].duration.text;
            updateSummary();
        }
    }

    var updateSummary = function() {
        $('#distanceText').text("Distance: " + distance);
        $('#timeText').text("Estimated Time: " + duration);
        $('#caloriesText').text("Calories Burned: " + Math.round(0.019 * distanceValue) + " calories");
    }


    $('#submit').click(function() {
        userOrigin = $('#origin').val();
        userDestination = $('#destination').val();
        window.initMap();
    });




    //end
});
