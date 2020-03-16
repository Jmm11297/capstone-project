import * as views from "./views";

export default st => `${views[st.view](st)}`;

function render() {
    document.querySelector("#root").innerHTML = `
    ${views.Home()}`
};

render();
