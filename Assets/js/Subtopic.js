//Generating HTML for subtopics inside of the details.html page.
export const SubTopic = (topic) => {
  //add container for subtopic
  let cont = document.createElement("div");
  cont.classList.add("py-3", "px-4", "section-item");

  //add tick icon
  let i = document.createElement("i");
  i.classList.add("fa-regular", "fa-circle-check", "color-secondary", "mr-2");
  cont.appendChild(i);

  //add subtopic text.
  cont.append(topic);

  return cont;
};
