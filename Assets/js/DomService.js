export const DomService = {
  CreateElement: (string, options) => {
    let element = document.createElement(string);

    options.class &&
      options.class
        .split(" ")
        .forEach((className) => element.classList.add(className));

    delete options.class;

    options.children &&
      options.children.forEach((child) => element.appendChild(child));

    delete options.children;

    for (const [key, value] of Object.entries(options)) {
      element[key] = value;
    }

    return element;
  },
};
