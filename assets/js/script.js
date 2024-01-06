const menu = document.getElementById("menu");
// const hamburger = document.getElementById("hamburger");
// const navButton = document.getElementById("navButton");
// const navMenu = document.getElementById("navMenu");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarButton = document.querySelector(".navbar-button");

menu.onclick = function () {
    if (navbarMenu.style.display == "flex" && navbarButton.style.display == "flex") {
        navbarMenu.style.display = "none";
        navbarButton.style.display = "none";
    } else {
        navbarMenu.style.display = "flex";
        navbarButton.style.display = "flex";
    }
};

window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
        navbarMenu.style.display = "flex";
        navbarButton.style.display = "flex";
    } else {
        navbarMenu.style.display = "none";
        navbarButton.style.display = "none";
    }
});

// menu.onclick = function () {
//     if (navbarButton.style.display == "flex") {
//         navbarButton.style.display = "none";
//     } else {
//         navbarButton.style.display = "flex";
//     }
// };

// hamburger.addEventListener("click", function () {
//     navButton.classList.toggle("navbar-button");
//     navMenu.classList.toggle("navbar-menu");
// });

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//   if (window.innerWidth > 1024) {
//     if (window.scrollY > 0) {
//       navbar.style.padding = '1rem 7rem';
//     } else {
//       navbar.style.padding = '4rem 7rem';
//     }
//   }
// });
