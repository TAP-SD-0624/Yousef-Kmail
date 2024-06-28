import data from "../../topics.json" with { type: "json" };
import { FavoriteCard } from "./FavoriteCard.js";
import { GetFavoriteTopics } from "./FavoriteManager.js";

export const Favorite = () => {
  let cont = document.createElement("div");
  cont.classList.add("favorite");
  cont.id = "favorite-container";


  let container = document.createElement("div");
  container.classList.add("fg-1" , "page-max-width");
  cont.appendChild(container);


  let label = document.createElement("p");
  label.innerHTML = "My Favorite Topics";

  container.appendChild(label);

  let innerContainer = document.createElement("div");
      innerContainer.classList.add("flex","favorite-cards-container")
  
  container.appendChild(innerContainer);

  let favorite_Items = GetFavoriteTopics();

  favorite_Items.forEach((item) => {
    innerContainer.appendChild(FavoriteCard(item));
  });

  return cont;
};