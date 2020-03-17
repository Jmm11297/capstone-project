import * as views from "./views";

export default st => `${views[st.view](st)}`;

function render(st) {
    document.getElementById("root").innerHTML = `
    ${views.Home()}`;
};

render();
