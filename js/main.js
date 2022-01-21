const navigationButton = document.querySelector('.navigation-button');
let navigationBarOpen = false;

const navbarMenu = document.querySelector("nav ul");
const navbarLinks = document.querySelectorAll("navbar ul a");

// navigationButton.addEventListener("click", navbarTogglerClick);

// function navbarTogglerClick() {

// }


navigationButton.addEventListener('click', () => {
    if (!navigationBarOpen) {
        navigationButton.classList.add('open');
        // navigationButton.classList.toggle("open-navbar-toggler");
        navbarMenu.classList.toggle("open");
        navigationBarOpen = true;
    } else {
        navigationButton.classList.remove('open');
        navigationBarOpen = false;
        navbarMenu.classList.toggle("open");
    }
});
