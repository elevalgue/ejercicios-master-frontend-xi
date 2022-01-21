import React from "react";
import { useState, useEffect } from "react";
// import classes from "../../styles/HelloWorld.scss";
// import classes = require ("../../styles/HelloWorld.scss"); 
// const classes = require("./mystyles.scss");
const classes = require("../../styles/HelloWorld.scss"); 


const teachersName = ["World", "Antonio", "Victor", "Braulio", "Javi", "Santi"]

export const HelloWorld: React.FC = (props)  => {
  const [teachers, setTeachears] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setTeachears((teachers) => (teachers === 5 ? 0 : teachers + 1));
    }, 1500);
  }, []);

  return (
    <header className={classes.header}>
        <h1 className={classes.header__title}>
        Hello, 
        <span> {teachersName[teachers]}!</span>
        </h1>  
    </header>
  );
};