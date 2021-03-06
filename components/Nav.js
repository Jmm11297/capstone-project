import { Header } from ".";

export default links => `
    <nav>
        <div class="logo">
            <h4>Clique Safe</h4>
        </div>
        <ul class="nav-links" id="nav-links">
            ${links.map(
                link =>
                `<li><a href="#">${link.title}</a></li>`
              ).join()}
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>`