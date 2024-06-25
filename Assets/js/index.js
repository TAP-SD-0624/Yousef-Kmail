import { ToggleThemeMode } from "./Darkmode.js";
import data from "../../topics.json" with { type: "json" };
import { CreateCard } from "./Card.js";

document
  .getElementById("mode-toggle")
  .addEventListener("click", ToggleThemeMode);

document.addEventListener("DOMContentLoaded" , ()=>{

var element = document.getElementById("cards-container");

data.forEach((item)=>{ element.appendChild(CreateCard(item))})

})