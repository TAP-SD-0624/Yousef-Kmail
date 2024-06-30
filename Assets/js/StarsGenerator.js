import { DomService } from "./DomService.js";

//this function will generate stars HTML based on the
//rating provided, integars would generate full star,

//while fractions would generate half a star "0.1 - 0.99"
export const GenerateStars = (rating) => {
  let stars = DomService.CreateElement("div", {
    class: "stars",
    children: GetStarsNodes(rating),
  });
  return stars;
};

const GetStarsNodes = (rating) => {
  let stars = [];
  let i = 1;
  for (; i < rating; i++) {
    let fullStar = DomService.CreateElement("span", { class: "fa fa-star" });
    stars.push(fullStar);
  }
  for (; i <= 5; i++) {
    if (rating > i - 1) {
      let emptyStar = DomService.CreateElement("span", {
        class: "fa fa-star-half-o color-orange",
      });
      stars.push(emptyStar);
    } else {
      let emptyStar = DomService.CreateElement("span", {
        class: "fa fa-star-o",
      });

      stars.push(emptyStar);
    }
  }
  return stars;
};
