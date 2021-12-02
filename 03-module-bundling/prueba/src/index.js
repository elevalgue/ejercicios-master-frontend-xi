import * as utils from "./averageService";
import "./mystyles.scss";
import animalImg from "./content/quokka.jpg"; 

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);

const imgElem = document.createElement("img");
imgElem.src = animalImg;

document.getElementById("imgContainer").appendChild(imgElem); 