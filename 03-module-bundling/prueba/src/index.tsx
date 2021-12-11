import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header";
import {App} from "./components/App";
import {Footer} from "./components/Footer";

ReactDOM.render(
  <div>
    <Header /> 
    <App />   
    <Footer /> 
  </div>,
  document.getElementById("root")
);

