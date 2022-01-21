import React from "react";
import starCatcher from "../../content/star-catcher.jpg"
import quokka from "../../content/quokka.jpg"
import classes from "../../styles/App.scss";
// const classes = require("../../styles/App.scss"); 
const classes = require("../../styles/App.scss"); 


// import classes = require ("../../styles/App.scss"); 


export const App: React.FC = () => {

  return (
      <div className={classes.container}>
        <img className={classes.container__image} src={quokka}/>
      </div>
  );
};


      // <img src={quokkaImg} className={classes.quokkaImg} />
