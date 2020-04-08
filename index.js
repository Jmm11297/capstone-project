import * as state from "./store";
import * as components from "./components";
// import Navigo from "navigo";
// import { capitalize } from "lodash";
// const router = new Navigo(window.location.origin);
// router.on("/", () => render(state.Home)).resolve();
// router.on({
//   "/": () => render(state.Home),
//   ":page": params => {
//     let page = capitalize(params.page);
//     render(state[page]);
//   }});

// function indexRender(st) {
//     const root = document.getElementById("root");
//     root.innerHTML = `
//     ${components.Header(st)}                     
//     ${components.Nav(state.Links)}
//     ${components.Main(st)}
//     ${components.Footer()}`;
//     console.log(root.querySelector("nav"))
// };

function render(st) {
    const root = document.getElementById("root");
    root.innerHTML = `
    ${components.Header(st)}
    ${components.Nav(state.Links)}
    ${components.Main(st)}
    ${components.Footer()}
    `;
    console.log(root.querySelector("nav"));
    // router.updatePageLinks();
    addNavEventListeners();
    navSlide();
};

function addNavEventListeners() {
    document.getElementById("nav-links").addEventListener("click", event =>
    {event.preventDefault();
    render(state[event.target.textContent])});
    //.forEach(link => link //Only One Element by Id multiple elements by class
};

function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        // Nav toggles when burger is clicked
        nav.classList.toggle('nav-active');
        console.log("'BEEEEEEEEP' -HAMBURGER");
        // Animate the links inside nav
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Equal delay as links pop up 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.6}s`;
            }
        });
        //Burger changes
        burger.classList.toggle('toggle');
    });
};

render(state.Home);

function addMap() {
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

function addMapScript() {
    let mapScript = document.createElement("script");
    mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDq4b9XG8Yfue3vTu-UC7FWO0BLppYGPMs&callback=addMap";
    let asyncMap = document.createAttribute("async");
    let deferMap = document.createAttribute("defer");
    mapScript.setAttributeNode(asyncMap);
    mapScript.setAttributeNode(deferMap);
    document.body.appendChild(mapScript);
};

addMapScript();