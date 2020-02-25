const eventMapDiv = document.getElementById("event-map");
const htmlPage = `
        <h1 class="header">Marco Polo</h1>
        <button class="tablink nav-link" data-target ="home" href="#home">Home</button>
        <button class="tablink nav-link" data-target ="event-map" href="#event-map">Map of Events</button>
        <button class="tablink nav-link" data-target ="event-add" href="#event-add">Add an Event</button>
        <button class="tablink nav-link" data-target ="about-contact" href="#about-contact">About/Contact</button>
        <footer class="homePageFooter">
            <p><a href="#home">Home</a></p>
            <p><a href="#event-map">Map of Events</a></p>
            <p><a href="#event-add">Add an Event</a></p>
            <p><a href="#about-contact">About/Contact</a></p>
        </footer>
`;
eventMapDiv.innerHTML = htmlPage;