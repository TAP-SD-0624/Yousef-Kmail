const ToggleThemeMode = () => {
  document.body.classList.contains("dark-mode")
    ? document.body.classList.remove("dark-mode")
    : document.body.classList.add("dark-mode");
};
