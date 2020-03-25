import * as views from "./components/views";
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

export class StateObserver {
    constructor(subject, stateContext) {
        this.subject = subject;
        this.stateContext = stateContext;
        this.active = (subject.state.view == stateContext.view);
        subject.registerObserver(this);
    }

    notify(state) {
        if (state.view == this.stateContext.view) {
            this.active = true;
        } else {
            this.active = false;
        }
        this.render();
    }

    render() {
        if (this.active == true) {
            document.querySelector("#root").innerHTML = `
                ${Header(this.stateContext)}
                ${Nav(state.Links)}
                ${Main(this.stateContext)}
                ${views[this.stateContext.view](this.stateContext)}
                ${Footer(this.stateContext)}
            `;

            this.addNavEventListeners();
        }
    };

    addNavEventListeners() {
        // add event listeners to Nav items for navigation
        document.querySelectorAll("nav a").forEach(navLink =>
            navLink.addEventListener("click", event => {
                event.preventDefault();
                this.subject.setState(stateStore[event.target.title]);
            })
        );
        // add menu toggle to bars icon in nav bar
        document
            .querySelector(".burger")
            .addEventListener("click", event =>
            {document.querySelector(".hidden-mobile").classList.toggle(".hidden--mobile")
        });
    }
}
