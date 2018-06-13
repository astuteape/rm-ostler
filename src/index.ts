"user strict";

import "./styles/index.scss";

// Prevent CSS animations on load
window.onload = () => {
  body[0].classList.remove("is-preloading");
};

// Navigation menu
const body = document.getElementsByTagName("body");
const navMobileButton = document.getElementById("nav-mobile-menu");
const navLinkContainer = document.getElementById("nav-link-wrapper");

navMobileButton.addEventListener("click", () => {
  navLinkContainer.classList.contains("nav-is-expanded")
    ? navLinkContainer.classList.remove("nav-is-expanded")
    : navLinkContainer.classList.add("nav-is-expanded");
});

// Copyright date
let yearString = new Date().getFullYear().toString();
let copyrightDateContainer = document.getElementById("copyright-date");
copyrightDateContainer.innerHTML = yearString;
