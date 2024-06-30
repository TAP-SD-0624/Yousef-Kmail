import { DomService } from "./DomService.js";
import { FavoriteCard } from "./FavoriteCard.js";
import { GetFavoriteTopics } from "./TopicRepository.js";

export const Favorite = () => {
  let cont = DomService.CreateElement("div", {
    class: "favorite",
    id: "favorite-container",
    children: [AddChildren()],
  });
  return cont;
};

export const UpdateFavourite = () => {
  document.getElementById("favorite-container").textContent = "";
  document.getElementById("favorite-container").appendChild(AddChildren());
};

const AddChildren = () => {
  let container = DomService.CreateElement("div", {
    class: "fg-1 page-max-width",
    children: [
      DomService.CreateElement("p", {
        class: "fw-4",
        children: ["my favorite topics"],
      }),

      DomService.CreateElement("div", {
        class: "favorite-cards-container",
        children: GetFavoriteTopicsToNodes(),
      }),
    ],
  });

  return container;
};

const GetFavoriteTopicsToNodes = () => {
  let favorite_Items = GetFavoriteTopics();

  let nodes = [];
  favorite_Items.forEach((item) => {
    nodes.push(FavoriteCard(item));
  });
  return nodes;
};
