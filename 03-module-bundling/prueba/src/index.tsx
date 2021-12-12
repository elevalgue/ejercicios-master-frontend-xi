import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header/Header";
import {App} from "./components/App/App";
import {Footer} from "./components/Footer/Footer";
import "./styles/pages/index.scss"; 

ReactDOM.render(
  <div>
    <Header /> 
    <App />   
    <Footer /> 
  </div>,
  document.getElementById("root")
);

