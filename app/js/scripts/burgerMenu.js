const burgerMenu = document.querySelector('.header__toggle');
const navigationPanel = document.querySelector('.nav');
const blackout = document.querySelector('._blackout');

burgerMenu.addEventListener('click', () => {
    navigationPanel.style.display ="block";
    blackout.style.display ="block";
});