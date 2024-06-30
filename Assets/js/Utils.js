//toggling the class name of the body would change all variables used accross the app.
export const SetThemeMode = (state) => {
  state
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode");
};

//Toggle the class on the favorite container to show or hide  it.
export const ToggleFavorite = () => {
  let favElement = document.getElementById("favorite-container");

  favElement.classList.contains("favorite-show")
    ? favElement.classList.remove("favorite-show")
    : favElement.classList.add("favorite-show");
};

export const UpdateButtonVisuals = (state) => {
  document.getElementById("add-favorite-button").innerHTML = state
    ? "Remove from favourite "
    : "Add to favourite ";

  let i = document.createElement("i");
  i.classList.add("fa-regular", "fa-heart");

  document.getElementById("add-favorite-button").appendChild(i);

  document.getElementById("add-favorite-button-mobile").innerHTML = state
    ? "Remove from favourite "
    : "Add to favourite ";

  let ii = document.createElement("i");
  ii.classList.add("fa-regular", "fa-heart");

  document.getElementById("add-favorite-button-mobile").appendChild(ii);
};
