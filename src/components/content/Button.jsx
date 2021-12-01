import React from "react";
import classes from "./Content.module.scss";
import { Link } from "react-router-dom";
function Button() {
  return (
    <div className={classes.button}>
      <span>
        <Link to='/'>chọn mua</Link>
      </span>
    </div>
  );
}

export default Button;
