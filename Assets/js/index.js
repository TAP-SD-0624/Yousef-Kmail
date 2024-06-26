import data from "../../topics.json" with { type: "json" };
import { ToggleThemeMode } from "./Darkmode.js";
import { CreateCard } from "./Card.js";

//Populate the cards info into the cards container in the main page.
let cards_container = document.getElementById("cards-container");
data.forEach(item => { cards_container.appendChild(CreateCard(item))})


//Add Dark mode toggle functionality to its respective button in the details page.
document.getElementById("theme-toggle").addEventListener("click" , ToggleThemeMode)

