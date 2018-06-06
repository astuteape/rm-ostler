"user strict";

import "./styles/index.scss";

// Navigation menu
const mobileNavButton = document.getElementById("nav-mobile-menu");
const navPagesLinks = document.getElementById("nav-link-container");

mobileNavButton.addEventListener("click", () => {
  if (navPagesLinks.classList.contains("nav-mobile-collapsed")) {
    navPagesLinks.classList.remove("nav-mobile-collapsed");
  } else {
    navPagesLinks.classList.add("nav-mobile-collapsed");
  }
});

// Copyright date
let yearString = new Date().getFullYear().toString();
let copyrightDateContainer = document.getElementById("copyright-date");
copyrightDateContainer.innerHTML = yearString;
