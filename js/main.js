const navigationButton = document.querySelector('.navigation-button');
let navigationBarOpen = false;
navigationButton.addEventListener('click', () => {
    if (!navigationBarOpen) {
        navigationButton.classList.add('open');
        navigationBarOpen = true;
    } else {
        navigationButton.classList.remove('open');
        navigationBarOpen = false;
    }
});