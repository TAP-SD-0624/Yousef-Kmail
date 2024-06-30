export const DomService = {
  CreateElement: (string, options) => {
    let element = document.createElement(string);

    options.class &&
      options.class
        .split(" ")
        .forEach((className) => element.classList.add(className));

    for (const [key, value] of Object.entries(options)) {
      element[key] = value;
    }

    return element;
  },
};
