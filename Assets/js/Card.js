export const CreateCard = ({ image, category, rating, name, topic, id }) => {
  const GetStars = (rating) => {
    let stars = document.createElement("div");
    stars.classList.add("stars-container");
    let i = 0;
    for (; i < rating; i++) {
      let fullStar = document.createElement("span");
      fullStar.classList.add("fa");
      fullStar.classList.add("fa-star");
      stars.appendChild(fullStar);
    }
    for (; i < 5; i++) {
      let emptyStar = document.createElement("span");
      emptyStar.classList.add("fa");
      emptyStar.classList.add("fa-star-o");
      stars.appendChild(emptyStar);
    }
    return stars;
  };

  let card = document.createElement("a");
  card.href = `./details.html?id=${id}`;
  card.classList.add("card");
  card.innerHTML = `<div class="position-relative">
        <img src="./Assets/Logos/${image}" alt="" />
      </div>
      <div class="px-4">
        <p class="my-1">${category}</p>
        <h4 class="m-0">${topic}</h4>
        ${GetStars(rating).outerHTML}
        <div class="mb-4">
          <span>Auther:</span>
          <span>${name}</span>
        </div>
      </div>`;

  return card;
};
