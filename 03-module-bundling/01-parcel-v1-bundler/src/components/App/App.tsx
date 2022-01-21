import React from "react";
// import starCatcher from "../../content/star-catcher"
const starCatcher = require("../../content/star.jpg");
const classes = require("../../styles/App.scss");

// const classes = require("./mystyles.scss");

export const App: React.FC = () => {

  return (
      <div className={classes.container}>
        <img className={classes.container__image} src={starCatcher}/>
      </div>
  );
};


