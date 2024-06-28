import data from "../../topics.json" with { type: "json" };
import { SubTopic } from "./Subtopic.js";
import {  ToggleFavorite as ShowFavorite } from "./Utils.js";
import { GenerateStars } from "./StarsGenerator.js";
import { ToggleFavorite, ExistInFavorite } from "./FavoriteManager.js";
import { Favorite } from "./Favorite.js";
import { SetThemeMode } from "./Utils.js";
import { GetMode, ToggleMode } from "./DarkmodeManager.js";
//Retrieve the id from the QueryString in the URL
const searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get("id");

if (!id) {
  document.location.pathname = "./index.html";
}
//Retrieve the topic the details page is inspecting.
let detailed_item = data.find((x) => x.id.toString() === id.toString());

// populate topic data among different sections of the details page.
document.getElementById("category").innerHTML = detailed_item.category;
document.getElementById("topic").innerHTML = detailed_item.topic;
document.getElementById(
  "preview-image"
).src = `./Assets/Logos/${detailed_item.image}`;
document.getElementById("auther").innerHTML = detailed_item.name;
document.getElementById("description").innerHTML = detailed_item.description;
document.getElementById("sub-topics-label").innerHTML =
  detailed_item.topic + " sub topics";
document
  .getElementById("stars-container")
  .appendChild(GenerateStars(detailed_item.rating));


const UpdateButtonVisuals = ()=>{
document
  .getElementById("add-favorite-button").innerHTML = ExistInFavorite(id) ? "Remove from favourite " : "Add to favourite ";

let i =document.createElement("i");
i.classList.add("fa-regular" , "fa-heart");

document
  .getElementById("add-favorite-button").appendChild(i);
}


const HandleAddFavorite = ()=>{
    ToggleFavorite(id);
    UpdateButtonVisuals();
}


document
  .getElementById("add-favorite-button")
  .addEventListener("click", () => HandleAddFavorite(id));


UpdateButtonVisuals();

//populate the subtopics
let subtopics_container = document.getElementById("subtopics-container");
subtopics_container.innerHTML = "";
detailed_item.subtopics.forEach((item) => {
  subtopics_container.appendChild(SubTopic(item));
});


const HandleThemeButton = ()=>{
    ToggleMode();
    SetThemeMode(GetMode())
}
SetThemeMode(GetMode());

document
  .getElementById("toggle-favorite")
  .addEventListener("click", ShowFavorite);

document
  .getElementById("favorite").appendChild(Favorite());

document
  .getElementById("theme-toggle")
  .addEventListener("click", HandleThemeButton);
