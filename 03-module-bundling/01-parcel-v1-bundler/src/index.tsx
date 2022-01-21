import React from "react";
import ReactDOM from "react-dom";
// import { Hello } from "./hello";

// import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { App } from "./components/App/App";

// ReactDOM.render(<Hello />, document.getElementById("root"));

ReactDOM.render(
  <div>
    <HelloWorld /> 
    <App />   
  </div>,
  document.getElementById("root")
);