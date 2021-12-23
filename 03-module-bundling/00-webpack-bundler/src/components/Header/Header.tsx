import React from "react";
import classes from "../../styles/Header.scss"


export const Header: React.FC = ()  => {

  return (
    <header className={classes.header}>
        <h1>
          Hello World! 👋
        </h1>  
    </header>
  );
};