import { Header } from ".";

export default links => `
    <nav>
        <div class="logo">
            <h4>Clique Safe</h4>
        </div>
        <ul class="hidden-mobile" id="nav-links">
            ${links.map(link => `<li><a class="nav-clicks" href="#" aria-label=${link.text}>${link.title}</a></li>`).join('')}
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>`