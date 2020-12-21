const parser = new DOMParser();
const switcher = document.querySelector(".theme-switcher");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const currentTheme = localStorage.getItem("theme");
const menu=document.querySelector(".menu");

let currentPath = window.location.pathname;
let currentPage = document.querySelector(`a[href='${currentPath}']`);
let menuOpen = false;

if(currentPage){
    currentPage.classList.add("current-page");
}
else{
    currentPage = document.querySelector(`a[href='/index.html']`);
    currentPage.classList.add("current-page");
}

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    switcher.textContent = "Light Theme";
}
else{
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    switcher.textContent = "Dark Theme";
}

hamburgerBtn.addEventListener('click',function() {
    let menuToggle = document.querySelector('.menu-toggle');
    
    menu.classList.toggle('visible');
    menuToggle.classList.toggle('open');

    if(menuOpen){
        menuOpen = false;
    }
    else{
        menuOpen = true;
    }
    hamburgerBtn.classList.toggle('open');
});

document.addEventListener('click',function(evt) {
    let targetElement = evt.target;

        do {
            if (targetElement == menu.parentNode) { // check if pressed nav
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
            
        } while (targetElement);

        menu.classList.remove('visible');
    
});

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    let theme;
    if(className == "dark-theme") {
        theme = "dark";
        this.textContent = "Light Theme";
    }
    else {
        theme = "light";
        this.textContent = "Dark Theme";
    }

    localStorage.setItem("theme", theme);

    console.log('current theme: ' + className);

});

