import React from "react";
// import { getAvg } from "../services/service";
import starCatcher from "../../content/star-catcher.jpg"
import classes from "../../styles/App.scss"

export const App: React.FC = () => {

  return (
    <div>
      
      <div className={classes.imgContainer}>
        <img className={classes.image} src={starCatcher}/>
        </div>
      </div>
  );
};