import data from "../../topics.json" with { type: "json" };
import { SubTopic } from "./Subtopic.js";
import {  ToggleFavorite as ShowFavorite } from "./Utils.js";
import { GenerateStars } from "./StarsGenerator.js";
import { ToggleFavoriteTopic, ExistInFavorite, GetTopic } from "./TopicRepository.js";
import { Favorite } from "./Favorite.js";
import { SetThemeMode } from "./Utils.js";
import { GetMode, ToggleMode } from "./DarkmodeManager.js";
import { UpdateButtonVisuals } from "./Utils.js";
//Retrieve the id from the QueryString in the URL
const searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get("id");

if (!id) {
  document.location.pathname = "./index.html";
}
//Retrieve the topic that the details page is inspecting.
let detailed_item = GetTopic(id);

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



 
//start
//lets handle pressing on the button of the card(Add or remove from favorite).
//Display correct state first on the button.  
UpdateButtonVisuals(ExistInFavorite(id));

//once the button is pressed we will toggle the state of the card.
const HandleAddFavorite = ()=>{
    ToggleFavoriteTopic(id);
    UpdateButtonVisuals(ExistInFavorite(id));
}

//hook the functionality with the button
document
  .getElementById("add-favorite-button")
  .addEventListener("click", () => HandleAddFavorite(id));
//end


//start
//populate the subtopics
let subtopics_container = document.getElementById("subtopics-container");
subtopics_container.innerHTML = "";
detailed_item.subtopics.forEach((item) => {
  subtopics_container.appendChild(SubTopic(item));
});
//end



//start
//handling the navbar button for showing or hiding the favorites.
document
  .getElementById("toggle-favorite")
  .addEventListener("click", ShowFavorite);


//lets add our favorites to the favorites container.
document
  .getElementById("favorite").appendChild(Favorite());
//end


//start
//lets handle the theme of our app
//we call the setTheme at the begining so our page take our preference 
SetThemeMode(GetMode());

//this method will be called when the user toggles the theme
const HandleThemeButton = ()=>{
    ToggleMode();
    SetThemeMode(GetMode())
}

//lets bind the method with the button.
document
  .getElementById("theme-toggle")
  .addEventListener("click", HandleThemeButton);
//end