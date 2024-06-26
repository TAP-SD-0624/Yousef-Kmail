import data from "../../topics.json" with { type: "json" };
import { ToggleThemeMode } from "./Darkmode.js";
import { CreateCard } from "./Card.js";

let cards_container = document.getElementById("cards-container");

  data.forEach(item => { cards_container.appendChild(CreateCard(item))})

  document.getElementById("theme-toggle").addEventListener("click" , ToggleThemeMode)

