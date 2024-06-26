import { GenerateStars } from "./StarsGenerator.js";
import { DomService } from "./DomService.js";
//Generating card HTML and populate its data into its
//respective HTML.
export const CreateCard = ({ image, category, rating, name, topic, id }) => {
  let card = DomService.CreateElement("a", {
    href: `./details.html?id=${id}`,
    class: "card",
  });

  card.innerHTML = `<div class="position-relative">
        <img src="./Assets/Logos/${image}" alt="" />
      </div>
      <div class="px-4">
        <p class="my-1">${category}</p>
        <h4 class="m-0">${topic}</h4>
        <div class="stars-container" >
        ${GenerateStars(rating).outerHTML}
      
        </div>
        <div class="mb-4">
          <span>Auther:</span>
          <span>${name}</span>
        </div>
      </div>`;
  return card;
};
