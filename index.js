import * as state from "./store";
//import {Header, Nav, Main, Footer} from "./components";
import * as components from "./components";

function indexRender(st) {
    const root = document.getElementById("root");
    root.innerHTML = `
    ${components.Header(st)}
    ${components.Nav(state.Links)}
    ${components.Main(st)}
    ${components.Footer(st)}`;
    console.log(root.querySelector("nav"))
};

indexRender(state.Home);

function addNavEventListeners() {
    document.getElementById("nav-links").addEventListener("click", event =>
    {event.preventDefault();
    render(state[event.target.textContent])});
    //.forEach(link => link //Only One Element by Id multiple elements by class
    
};

function render(st) {
    const root = document.getElementById("root");
    root.innerHTML = `
    ${components.Header(st)}
    ${components.Nav(state.Links)}
    ${components.Main(st)}
    ${components.Footer()}
    `;
    console.log(root.querySelector("nav"));
    addNavEventListeners();
}

const navSlide = () => {
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
}




render(state.Home);

navSlide();