import { DomService } from "./DomService.js";

//Generating HTML for subtopics inside of the details.html page.
export const SubTopic = (topic) => {
  //add container for subtopic
  let cont = DomService.CreateElement("div", {
    class: "py-3 px-4 section-item",
    children: [
      DomService.CreateElement("i", {
        class: "fa-regular fa-circle-check color-secondary mr-2",
      }),
      topic,
    ],
  });

  return cont;
};
