export const GetMode = () => {
  let mode = localStorage.getItem("theme-mode");
  if (!mode) return false;

  return JSON.parse(mode);
};

export const ToggleMode = () => {
  let mode = localStorage.getItem("theme-mode");
  if (!mode) localStorage.setItem("theme-mode", JSON.stringify(true));
  else {
    localStorage.setItem("theme-mode", !JSON.parse(mode));
  }
};
