
import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { App } from "./components/App/App";
import "./styles/index.scss";

ReactDOM.render(
  <div>
    <HelloWorld /> 
    <App />   
  </div>,
  document.getElementById("root")
);

