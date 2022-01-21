import React from "react";
const starCatcher = require("../../content/star.jpg");
const classes = require("../../styles/App.scss");

export const App: React.FC = () => {

  return (
      <div className={classes.container}>
        <img className={classes.container__image} src={starCatcher}/>
      </div>
  );
};


