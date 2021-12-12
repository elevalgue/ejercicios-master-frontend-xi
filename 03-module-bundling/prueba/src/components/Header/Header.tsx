import React from "react";
import classes from "./Header.scss"

export const Header: React.FC = ()  => {

  return (
    <div>
      <div className={classes.header}>
        <h1>
          Hello World!
        </h1>
        </div>
      </div>
  );
};