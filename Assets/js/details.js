import data from "../../topics.json" with { type: "json" };
import { SubTopic } from "./Subtopic.js";
import { ToggleThemeMode, ToggleFavorite } from "./Utils.js";
import { GenerateStars } from "./StarsGenerator.js";
import { AddFavorite } from "./FavoriteManager.js";
import { Favorite } from "./Favorite.js";
//Add Dark mode toggle functionality to its respective button in the details page.

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
document
  .getElementById("add-favorite-button")
  .addEventListener("click", () => AddFavorite(id));
//populate the subtopics
let subtopics_container = document.getElementById("subtopics-container");
subtopics_container.innerHTML = "";
detailed_item.subtopics.forEach((item) => {
  subtopics_container.appendChild(SubTopic(item));
});

document
  .getElementById("toggle-favorite")
  .addEventListener("click", ToggleFavorite);
document.getElementById("favorite").appendChild(Favorite());

document
  .getElementById("theme-toggle")
  .addEventListener("click", ToggleThemeMode);
