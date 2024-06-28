//this function will generate stars HTML based on the
//rating provided, integars would generate full star,
//while fractions would generate half a star "0.1 - 0.99"
export const GenerateStars = (rating) => {
  let stars = document.createElement("div");
  stars.classList.add("stars");
  let i = 1;
  for (; i < rating; i++) {
    let fullStar = document.createElement("span");
    fullStar.classList.add("fa", "fa-star");
    stars.appendChild(fullStar);
  }
  for (; i <= 5; i++) {
    if (rating > i - 1) {
      let emptyStar = document.createElement("span");
      emptyStar.classList.add("fa", "fa-star-half-o", "color-orange");
      stars.appendChild(emptyStar);
    } else {
      let emptyStar = document.createElement("span");
      emptyStar.classList.add("fa", "fa-star-o");
      stars.appendChild(emptyStar);
    }
  }
  return stars;
};
