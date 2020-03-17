import * as state from "./store";
import {Header, Nav, Main, Footer} from "./components";

console.log(state)

function navSlide() {
    const burger = document.querySelector('nav > div.burger');
    const nav = document.querySelector('nav > ul.nav-links');
    const navLinks = document.querySelector('nav > ul.nav-links > li.link-tag');
    
    burger.forEach(bite => bite.addEventListener('click', () => {
        nav.classList.toggle("nav > ul.nav-links > li.link-tag");
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


function addNavEventListeners() {
    document.getElementsById("nav-links")
    .forEach(link => link
    .addEventListener("click", event =>
    {event.preventDefault()},
    render(state[event.target.textContent])))
};

function render(st = state.Home) {
    document.getElementById("root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
    console.log(st)

    addNavEventListeners();
    navSlide();
}

render();
