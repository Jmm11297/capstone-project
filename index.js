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

function navSlide() {
    const burger = document.querySelector('nav > div.burger');
    const nav = document.querySelector('nav > ul#nav-links');
    const navLinks = nav.querySelectorAll('li');
    
    //const blines = [...burger];
    console.log(`burger: ${burger}`);//\nblines: ${blines}`)
    burger.addEventListener('click', () => {
        nav.classList.toggle("nav>ul#nav-links>li");
    });

    console.log(navLinks);
    //console.log([...navLinks]);
    navLinks.forEach((link, index) => {
        console.log(link);
        if (link.style.animation) {
            link.style.animation = '';
        } else {link.style.animation = `navLinkFade 0.5s ease forwards ${(index/7+1.5)}s`;
    }})
};

navSlide();
render(state.Home);
