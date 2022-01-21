import React from "react";
import quokkaImg from "../../content/quokka.jpg"
import classes from "../../styles/App.scss";
const classes = require("../../styles/App.scss"); 

export const App: React.FC = () => {

  return (
      <div className={classes.container}>
        <img className={classes.container__image} src={quokkaImg}/>
      </div>
  );
};


