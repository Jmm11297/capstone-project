const app = {
    pages: []
    show: new Event('show')
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        });
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        });
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.pop);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.jump.getAttribute('data-jump');
        document.querySelectorAll('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(ev){
        console.log('Page', ev.jump.id, 'just shown')
    },
    pop: function(ev){
        console.log(location.hash, 'popstate event');
    }
};

document.addEventListener('DOMContentLoaded', app.init);