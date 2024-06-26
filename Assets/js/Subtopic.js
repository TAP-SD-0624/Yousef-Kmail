export const SubTopic = (topic) => {
  let cont = document.createElement("div");
  cont.classList.add("py-3", "px-4", "section-item");

  let i = document.createElement("i");
  i.classList.add("fa-regular", "fa-circle-check", "color-secondary", "mr-2");

  cont.appendChild(i);
  cont.append(topic);

  return cont;
};
