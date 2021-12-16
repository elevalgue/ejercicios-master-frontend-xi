import React from 'react';
const quokkaImg  = require("./content/quokka.jpg");
const classes = require("./mystyles.scss");

export const Hello: React.FC = () => {
  return (
    <div className={classes.hello}>
      <img src={quokkaImg} className={classes.quokkaImg} />
      <h2>Hello from React</h2>
    </div>
  )
}