# Bike Route
___
Simple interactive website for planning bike routes.

### URL: [http://brikky.tech/biking-google-api/](brikky.tech/biking-google-api/)

### Features
___
* Search for starting point and destination
* Estimate distance, time, calories burned
* Display route on interactive Google Map

### Technologies Used
____
- HTML
- CSS
- Javascript
- jQuery
- Google Maps API

### Code Sample
___
```JavaScript
// Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
            if (status == 'OK') {
                // Display the route on the map.
                directionsDisplay.setDirections(response);
            }
        });
```

### Future Work
___
1. Predictive search for locations
2. Add multiple stops to your route
3. Add option to show bike shops along route
4. Share your itinerary

### Screenshots
___
![BikeRoute](http://imgur.com/Ekv5OTd)
