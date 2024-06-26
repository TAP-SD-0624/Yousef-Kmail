//toggling the class name of the body would change all variables used accross the app.
export const ToggleThemeMode = () => {
  document.body.classList.contains("dark-mode")
    ? document.body.classList.remove("dark-mode")
    : document.body.classList.add("dark-mode");
};
