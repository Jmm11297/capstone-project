export default () => `
<div id="map">
</div>
<script>
    let map;
    document.addEventListener("DOMContentLoaded", () => {
        let s = document.createElement("script");
        s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDq4b9XG8Yfue3vTu-UC7FWO0BLppYGPMs";
        document.head.appendChild(s);
        s.addEventListener("load", () => {
            // script has loaded
            console.log("script has loaded");
            map = new google.maps.Map(document.getElementById("map"), {
                center: {
                    lat:38.6270,
                    lng:-90.1994
                },
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        });
    });
</script>
`;