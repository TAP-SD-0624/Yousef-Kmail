import { GenerateStars } from "./StarsGenerator.js";
import { DomService } from "./DomService.js";
export const FavoriteCard = ({ image, topic, rating, id }) => {
  let stars = GenerateStars(rating);
  stars.classList.add("pl-2", "mb-3");

  let card = DomService.CreateElement("a", {
    class: "favorite-card",
    href: `./details.html?id=${id}`,
    children: [
      DomService.CreateElement("img", {
        class: "favorite-card-img",
        src: `./Assets/Logos/${image}`,
      }),

      DomService.CreateElement("div", {
        class: "pl-2",
        innerHTML: topic,
      }),
      stars,
    ],
  });

  return card;
};
