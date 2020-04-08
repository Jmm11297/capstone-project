export default () => `
<iframe 
id="map"
width="600"
height="450"
frameborder="0"
style="border:0"
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDq4b9XG8Yfue3vTu-UC7FWO0BLppYGPMs" onerror="console.log("I work!")">
</iframe>
<script>
    let map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:38.6270,lng:-90.1994},
        zoom: 17,
        mapTypeID: google.maps.mapTypeID.ROADMAP
    });
    console.log("I work!");
    // geolocation
    let infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here!');
            infoWindow.open(map);
            map.setCenter(pos);
        }, 
    function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
    } else {
    // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    };

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };
    };
</script>
`;