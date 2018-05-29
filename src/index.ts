"user strict";

import "./styles/index.scss";

// Copyright date
let yearString = new Date().getFullYear().toString();
let copyrightDateContainer = document.getElementById("copyright-date");
copyrightDateContainer.innerHTML = yearString;
