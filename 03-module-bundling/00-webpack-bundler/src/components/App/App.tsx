import React from "react";
import starCatcher from "../../content/star-catcher.jpg"
import classes from "../../styles/App.scss"

export const App: React.FC = () => {

  return (
      <div className={classes.container}>
        <img className={classes.container__image} src={starCatcher}/>
      </div>
  );
  
};