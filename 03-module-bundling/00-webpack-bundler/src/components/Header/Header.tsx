import React from "react";
import { useState, useEffect } from "react";
import classes from "../../styles/Header.scss"
const teachersName = ["World", "Antonio", "Victor", "Braulio"]

// const helloTeachers = (props) => {
  
// }

export const Header: React.FC = (props)  => {
  const [teachers, setTeachears] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setTeachears((teachers) => (teachers === 2 ? 0 : teachers + 1));
    }, 1500);
  }, []);

  return (
    <header className={classes.header}>
        <h1 className={classes.header__title}>
        Hello, 
        <span>   {teachersName[teachers]}!</span>
        <span className={classes.skewed}></span>
        </h1>  
    </header>
  );
};