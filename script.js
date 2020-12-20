const parser = new DOMParser();
const switcher = document.querySelector(".theme-switcher");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const currentTheme = localStorage.getItem("theme");

let currentPath = window.location.pathname;
let currentPage = document.querySelector(`a[href='${currentPath}']`);
if(currentPage){currentPage.classList.add("current-page");}

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
   menu=document.querySelector(".menu");
   menu.classList.toggle('visible');
   hamburgerBtn.classList.toggle('open');
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

    console.log('current class name: ' + className);

});

