import { FavoriteCard } from "./FavoriteCard.js";
import { GetFavoriteTopics } from "./TopicRepository.js";

export const Favorite = () => {
  let cont = document.createElement("div");
  cont.classList.add("favorite");
  cont.id = "favorite-container";

  cont.appendChild(AddChildren());
  return cont;
};

export const UpdateFavourite = () => {
  document.getElementById("favorite-container").textContent = "";
  document.getElementById("favorite-container").appendChild(AddChildren());
};

const AddChildren = () => {
  let container = document.createElement("div");
  container.classList.add("fg-1", "page-max-width");

  let label = document.createElement("p");
  label.classList.add("fw-4");
  label.innerHTML = "My Favorite Topics";

  container.appendChild(label);

  let innerContainer = document.createElement("div");
  innerContainer.classList.add("favorite-cards-container");

  container.appendChild(innerContainer);

  let favorite_Items = GetFavoriteTopics();

  favorite_Items.forEach((item) => {
    innerContainer.appendChild(FavoriteCard(item));
  });

  return container;
};
