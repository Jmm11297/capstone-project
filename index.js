import {Home, Map, Add, Contact, Links} from "./store";
import {Header, Nav, Main, Footer} from "./components";

function navSlide() {
    const burger = document.querySelector('nav > div.burger');
    const nav = document.querySelector('nav > ul.nav-links');
    const navLinks = document.querySelector('nav > ul.nav-links > li.link-tag');
    
    burger.forEach(bite => bite.addEventListener('click', () => {
        nav.classList.toggle("nav > ul.nav-links");
    }));

    console.log(navLinks);
    navLinks.forEach((link, index) => {
        console.log(link);
        if (link.style.animation) {
            link.style.animation = '';
        } else {link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
    }
    })
};

navSlide();

function render() {
    document.querySelector("#root").innerHTML = `
    ${components.Header()}
    ${components.Nav()}
    ${components.Main()}
    ${components.Footer()}`;
};

render();

function render(st) {
    document.querySelector("#root").innerHTML = `
    ${Home(state)}
    ${Nav(state.Links)}
    ${Main(state)}
    ${Footer()}
    `;

    addNavEventListeners();
}

function addNavEventListeners() {
    document.getElementsById("nav-links")
    .forEach(link => link
    .addEventListener("click", event =>
    {event.preventDefault},
    render(state[event.target.textContent])))
};

render();