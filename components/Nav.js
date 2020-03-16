export default links => `<nav>
        <div class="logo">
            <h4>Marco Polo</h4>
        </div>
        <ul class="nav-links">
            ${links.map(link => `<li><a href="#">${link}</a></li>`).join()}
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>`