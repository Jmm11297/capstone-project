function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav.nav-links');
    const navLinks = document.querySelector('nav.nav-links.link-tag');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle("nav > ul");
    });
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

import * as components from "./components";

function render() {
    document.querySelector("#root").innerHTML = `
    ${components.Header()}
    ${components.Nav()}
    ${components.Main()}
    ${components.Footer()}`;
};

render();
