import { GenerateStars } from "./StarsGenerator.js";

//Generating card HTML and populate its data into its
//respective HTML.
export const CreateCard = ({ image, category, rating, name, topic, id }) => {
  let card = document.createElement("a");
  card.href = `./details.html?id=${id}`;
  card.classList.add("card");
  card.innerHTML = `<div class="position-relative">
        <img src="./Assets/Logos/${image}" alt="" />
      </div>
      <div class="px-4">
        <p class="my-1">${category}</p>
        <h4 class="m-0">${topic}</h4>
        ${GenerateStars(rating).outerHTML}
        <div class="mb-4">
          <span>Auther:</span>
          <span>${name}</span>
        </div>
      </div>`;
  return card;
};
