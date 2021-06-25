const burgerMenu = document.querySelector('.header__toggle');
const navigationPanel = document.querySelector('.nav');
const blackout = document.querySelector('._blackout');

burgerMenu.addEventListener('click', () => {
    navigationPanel.style.display = "block";
    blackout.style.display = "block";
});

const navLink = document.querySelectorAll('.nav__link');
const dropdownMenu = document.querySelectorAll('.dropdown');
const dropdownLink = document.querySelectorAll('.dropdown__link');
console.log(dropdownLink);

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        navLink[i].classList.add("_active");
        dropdownMenu[0].classList.add("_active");
    });
};

for (let j = 0; j < dropdownLink.length; j++) {
    dropdownLink[j].addEventListener('click', () => {
        dropdownLink[j].classList.add("_active");
        dropdownMenu[1].classList.add("_active");
    });
};