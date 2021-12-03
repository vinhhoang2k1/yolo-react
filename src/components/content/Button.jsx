import React from "react";
import classes from "./Content.module.scss";
import { Link } from "react-router-dom";
function Button(prop) {
  return (
    <div className={classes.button}>
      <span>
        <Link to='/'>{prop.content}</Link>
      </span>
    </div>
  );
}

export default Button;
