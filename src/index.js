import { homeContent } from "./main-page.js";
import { menuContent } from "./menu-content.js";
import { contactContent } from "./contact-content.js";
import "./styles.css";

homeContent();
//alert("WELCOME TO MY RESTAURANT!");
const container = document.querySelector("#content");

function loadContent(event) {
    container.textContent = "";

    switch (event.target.textContent) {
        case "Home": homeContent();
        break;
        case "Menu": menuContent();
        break;
        case "Contact Info": contactContent();
        break;
    }
}

const btn = document.querySelector("nav");
btn.addEventListener("click", loadContent);