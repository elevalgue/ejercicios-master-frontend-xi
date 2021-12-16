import "./mystyles.scss";
import quokkaImg from "./content/quokka.jpg";
// import starCatcher from "./content/star-catcher.jpg";

const userName = "Maricarmen";
const message = `Hello ${userName}`;

console.log(message);

const img = document.querySelector("img");
img.src = quokkaImg;

document.getElementById('imgContainer').appendChild(img); 