import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header/Header";
import {App} from "./components/App/App";
import "./styles/index.scss"; 


ReactDOM.render(
  <div>
    <Header /> 
    <App />   
  </div>,
  document.getElementById("root")
);

