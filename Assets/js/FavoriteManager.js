import data from "../../topics.json" with { type: "json" };


export const GetFavoriteTopics = ()=>{

    let favoriteIds = JSON.parse( localStorage.getItem("favoriteIds"));
    let favorites = favoriteIds.map(item => data.find(x=>x.id.toString() === item.toString()))
    return favorites;
}

export const AddFavorite = (id)=>{

    let favoriteIds = JSON.parse( localStorage.getItem("favoriteIds"));
    if(!favoriteIds)
        favoriteIds = [];
    else
    {
        if(favoriteIds.contains(id)){
            return; 
        }
    }
        favoriteIds.push(id);
        localStorage.setItem("favoriteIds",JSON.stringify(favoriteIds));
}


export const RemoveFavorite = (id)=>{

        let favoriteIds = JSON.parse( localStorage.getItem("favoriteIds"));
        favoriteIds.filter(item=>item != id)
        localStorage.setItem("favoriteIds",JSON.stringify(favoriteIds));

}

