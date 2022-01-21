const navigationButton = document.querySelector('.navigation-button');
let navigationBarOpen = false;

const navbarMenu = document.querySelector("nav ul");
const navbarLinks = document.querySelectorAll("navbar ul a");

navigationButton.addEventListener('click', () => {
    if (!navigationBarOpen) {
        navigationButton.classList.add('open');
        navbarMenu.classList.toggle("open");
        navigationBarOpen = true;
    } else {
        navigationButton.classList.remove('open');
        navigationBarOpen = false;
        navbarMenu.classList.toggle("open");
    }
});
