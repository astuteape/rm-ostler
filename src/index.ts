"user strict";

import "./styles/index.scss";

// Prevent CSS animations on load
window.onload = () => {
  const body = document.getElementsByTagName("body");
  body[0].classList.remove("is-preloading");
};

// Navigation menu

// Define collapsible animation functions
// Inspiration from Brandon Smith's CSS Tricks Post
// https://css-tricks.com/using-css-transitions-auto-dimensions/
const collapseSection = (element: HTMLElement) => {
  const contentHeight: number = element.scrollHeight;
  const elementTransition: string = element.style.transition;

  requestAnimationFrame(() => {
    // Set element height before collapse frame
    element.style.height = `${contentHeight}px`;
    element.style.transition = elementTransition;

    requestAnimationFrame(() => {
      element.style.height = `${0}px`;
      element.style.overflow = "hidden";
    });
  });
  element.setAttribute("data-collapsed", "true");
};

const expandSection = (element: HTMLElement) => {
  const contentHeight: number = element.scrollHeight;

  element.style.height = `${contentHeight}px`;
  element.setAttribute("data-collapsed", "false");
};

const toggleCollapse = (
  eventElement: HTMLElement,
  animateElement: HTMLElement,
  event: string
) => {
  eventElement.addEventListener(`${event}`, () => {
    const isCollapsed =
      animateElement.getAttribute("data-collapsed") === "true";

    if (isCollapsed) {
      expandSection(animateElement);
      animateElement.setAttribute("data-collapsed", "false");
    } else {
      collapseSection(animateElement);
    }
  });
};

// Call collapsible animation on navigation
const mobileNavButton: HTMLElement = document.querySelector(
  "#nav-mobile-button"
);
const navLinkWrapper: HTMLElement = document.querySelector("#nav-link-wrapper");

toggleCollapse(mobileNavButton, navLinkWrapper, "click");

// Copyright date
let yearString = new Date().getFullYear().toString();
let copyrightDateWrapper = document.getElementById("copyright-date");
copyrightDateWrapper.innerHTML = yearString;
