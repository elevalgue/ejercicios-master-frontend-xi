// import animalImg from "./content/quokka.jpg"; 

// const imgElem = document.createElement("img");
// imgElem.src = animalImg;

// document.getElementById("imgContainer").appendChild(imgElem);


import React from "react";
import ReactDOM from "react-dom";
import { HelloWorldComponent} from "./components/HelloWorldComponent";

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <HelloWorldComponent />   
  </div>,
  document.getElementById("root")
);

