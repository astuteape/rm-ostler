"user strict";

import "./styles/index.scss";

// Navigation menu
const navMobileButton = document.getElementById("nav-mobile-menu");
const navLinkContainer = document.getElementById("nav-link-container");

navMobileButton.addEventListener("click", () => {
  if (navLinkContainer.classList.contains("nav-is-expanded")) {
    navLinkContainer.classList.remove("nav-is-expanded");
  } else {
    navLinkContainer.classList.add("nav-is-expanded");
  }
});

// Copyright date
let yearString = new Date().getFullYear().toString();
let copyrightDateContainer = document.getElementById("copyright-date");
copyrightDateContainer.innerHTML = yearString;
