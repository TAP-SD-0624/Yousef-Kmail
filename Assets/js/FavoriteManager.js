import data from "../../topics.json" with { type: "json" };

export const GetFavoriteTopics = () => {
  let favoriteIds = JSON.parse(localStorage.getItem("favoriteIds"));
  let favorites = favoriteIds.map((item) =>
    data.find((x) => x.id.toString() === item.toString())
  );
  return favorites;
};

export const ToggleFavorite = (id) => {
  let favoriteIds = JSON.parse(localStorage.getItem("favoriteIds"));
  if (!favoriteIds) {
    favoriteIds = [];
    favoriteIds.push(id);
    localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
    return true;
  } else {
    if (favoriteIds.includes(id)) {
        RemoveFavorite(id);
        return false;
    }
    else {
    favoriteIds.push(id);
    localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
    return true;
        
    }
  }
};

export const RemoveFavorite = (id) => {
  let favoriteIds = JSON.parse(localStorage.getItem("favoriteIds"));
 favoriteIds = favoriteIds.filter((item) => item != id);
  localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
};

export const ExistInFavorite = (id) => {
  let ids = localStorage.getItem("favoriteIds");
  if (!ids) return false;

  let favoriteIds = JSON.parse(ids);

  return favoriteIds.includes(id);
};
