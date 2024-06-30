import { GenerateStars } from "./StarsGenerator.js";

export const FavoriteCard = ({ image, topic, rating, id }) => {
  let card = document.createElement("a");
  card.classList.add("favorite-card");
  card.href = `./details.html?id=${id}`;
  let img = document.createElement("img");
  img.classList.add("favorite-card-img");
  img.src = `./Assets/Logos/${image}`;

  let topicName = document.createElement("div");
  topicName.classList.add("pl-2");
  topicName.innerHTML = topic;

  card.appendChild(img);
  card.appendChild(topicName);

  let stars = GenerateStars(rating);
  stars.classList.add("pl-2", "mb-3");
  card.appendChild(stars);

  return card;
};
