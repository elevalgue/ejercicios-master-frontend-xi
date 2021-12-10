import React from "react";
// import { getAvg } from "../averageService";
import starCatcher from "../content/star-catcher.jpg"; 
import classes from "./HelloWorldStyles.scss"; 

export const HelloWorldComponent: React.FC = () => {

  return (
    <div className={classes.resultBackground}>
      <h1>
        Hello World!
      </h1>
      <img src={starCatcher}/>
    </div>
  );
};