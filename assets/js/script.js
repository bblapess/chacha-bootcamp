const menu = document.getElementById("menu");
// const hamburger = document.getElementById("hamburger");
// const navButton = document.getElementById("navButton");
// const navMenu = document.getElementById("navMenu");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarButton = document.querySelector(".navbar-button");

menu.onclick = function () {
	if (
		navbarMenu.style.display == "flex" &&
		navbarButton.style.display == "flex"
	) {
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

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});
