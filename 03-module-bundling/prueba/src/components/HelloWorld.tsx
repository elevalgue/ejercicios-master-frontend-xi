import React from "react";
// import { getAvg } from "../services/service";
import starCatcher from "../content/star-catcher.jpg"; 
import classes from "./HelloWorld.scss"; 

export const HelloWorld: React.FC = () => {

  return (
    <div className={classes.resultBackground}>
      <h1>
        Hello World!
      </h1>
      <img src={starCatcher}/>
    </div>
  );
};