import * as views from "./views";

function render() {
    document.querySelector("#root").innerHTML = `
    ${views.Home()}
    ${views.Map()}
    ${views.EventForm()}
    ${views.Contact()}`;
};

render();
