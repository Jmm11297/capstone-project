import { Header } from ".";

export default links => `
    <nav>
        <div class="logo">
            <h4>Marco Polo</h4>
        </div>
        <ul id="nav-links">
            ${links.map(link => `<li><a href="#" aria-label=${link.text} title="${link.title}">${link.title}</a></li>`).join('')}
        </ul>
        <div class="burger" id="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>`