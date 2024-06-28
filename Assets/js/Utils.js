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
