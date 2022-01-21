import React from "react";
import ReactDOM from "react-dom";
// import { Hello } from "./hello";

import { App } from "./components/App/App";
import { HelloWorld } from "components/HelloWorld/HelloWorld";

// ReactDOM.render(<Hello />, document.getElementById("root"));

ReactDOM.render(
  <div>
    <HelloWorld /> 
    <App />   
  </div>,
  document.getElementById("root")
);