import data from "../../topics.json" with { type: "json" };
import { SubTopic } from "./Subtopic.js";
import { ToggleThemeMode } from "./Darkmode.js";

document.getElementById("theme-toggle").addEventListener("click" , ToggleThemeMode)

const searchParams = new URLSearchParams(window.location.search);

let id = searchParams.get("id");

let detailed_item = data.find((x)=> x.id.toString() === id.toString())
console.log(detailed_item);

document.getElementById("category").innerHTML = detailed_item.category ;
document.getElementById("topic").innerHTML = detailed_item.topic ;
document.getElementById("preview-image").src = `./Assets/Logos/${detailed_item.image}` ;
document.getElementById("auther").innerHTML = detailed_item.name ;
document.getElementById("description").innerHTML = detailed_item.description ;
document.getElementById("sub-topics-label").innerHTML = detailed_item.topic + " sub topics";


let subtopics_container =document.getElementById("subtopics-container");
subtopics_container.innerHTML = "";

detailed_item.subtopics.forEach(item => {

subtopics_container.appendChild(SubTopic(item))
})

