// import * as utils from "./averageService";
// import "./mystyles.scss";
// import logoImg from "./content/logo_1.png";
// import animalImg from "./content/quokka.jpg"; 

// const scores = [90, 75, 60, 99, 94, 30];
// const averageScore = utils.getAvg(scores);
// const messageToDisplay = `average score ${averageScore}`;

// document.write(messageToDisplay);

// const imgElem = document.createElement("img");
// imgElem.src = animalImg;

// document.getElementById("imgContainer").appendChild(imgElem);


import React from "react";
import ReactDOM from "react-dom";
import { AverageComponent } from "./averageComponent";

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <AverageComponent />
  </div>,
  document.getElementById("root")
);
