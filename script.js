const parser = new DOMParser();
const switcher = document.querySelector('.theme-switcher');

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
}
else{
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}

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

