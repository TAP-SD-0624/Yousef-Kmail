export const CreateCard = ({ image, category, rating, name, topic }) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="position-relative">
        <img src="./Assets/Logos/${image}" alt="" />
      </div>
      <div class="px-4">
        <p class="my-1">${category}</p>
        <h4 class="m-0">${topic}</h4>
        <div class="stars-container">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star-o"></span>
          <span class="fa fa-star-o"></span>
        </div>
        <div class="mb-4">
          <span>Auther:</span>
          <span>${name}</span>
        </div>
      </div>`;

  return card;
};
