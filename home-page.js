const homeDiv = document.getElementById("home");
const htmlPage = `
<h1 class="header">Marco Polo</h1>
<button class="tablink nav-link" data-target ="home" href="#home">Home</button>
<button class="tablink nav-link" data-target ="event-map" href="#event-map">Map of Events</button>
<button class="tablink nav-link" data-target ="event-add" href="#event-add">Add an Event</button>
<button class="tablink nav-link" data-target ="about-contact" href="#about-contact">About/Contact</button>
<img id="homePageImage1" src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
<div class="search-box">
    <input class="search-txt" type="text" name="" placeholder="Type to Search">
    <a class="search-btn" href="#">
        <i class="fas fa-search"></i>
    </a>
</div>
<footer class="homePageFooter">
    <p><a href="#home">Home</a></p>
    <p><a href="#event-map">Map of Events</a></p>
    <p><a href="#event-add">Add an Event</a></p>
    <p><a href="#about-contact">About/Contact</a></p>
</footer>
`;
homeDiv.innerHTML = htmlPage;