import data from "../../topics.json" with { type: "json" };
import { SetThemeMode ,ToggleFavorite} from "./Utils.js";
import { CreateCard } from "./Card.js";
import { Favorite } from "./Favorite.js";
import { ToggleMode ,GetMode} from "./DarkmodeManager.js";
//Populate the cards info into the cards container in the main page.
let cards_container = document.getElementById("cards-container");
data.forEach((item) => {
  cards_container.appendChild(CreateCard(item));
});
SetThemeMode(GetMode());


const HandleThemeButton = ()=>{
    ToggleMode();
    SetThemeMode(GetMode())
}

//Add Dark mode toggle functionality to its respective button in the details page.
document
  .getElementById("theme-toggle")
  .addEventListener("click", HandleThemeButton);
document
  .getElementById("toggle-favorite")
  .addEventListener("click", ToggleFavorite);
document.getElementById("favorite").appendChild(Favorite());
