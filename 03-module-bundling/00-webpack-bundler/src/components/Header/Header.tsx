import React from "react";
import classes from "../../styles/Header.scss"


export const Header: React.FC = ()  => {

  return (
    <header className={classes.header}>
        <h1>
          Hello World! 👋
        </h1>
      <div className={classes.header__menu}>
        <nav>
          <li ><span><a href="">Webpack</a></span></li>
          <li><span><a href="">React</a></span></li>
          <li><span><a href="">Typescript</a></span></li>
        </nav>
      </div>
    </header>
  );
};