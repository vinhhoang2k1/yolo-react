import React from "react";
import classes from "./Content.module.scss";
import Slide from "./slide/Slide";
import Support from "./support/Support";
import Selling from "./selling/Selling";
import New from "./new/New";

function Content() {
  return (
    <div className={classes.content}>
      <Slide />
      <Support />
      <h2 className={classes.content_title}>
        top sản phẩm bán chạy trong tuần
      </h2>
      <Selling />
      <h2 className={classes.content_title}>sản phẩm mới </h2>
      <New />
    </div>
  );
}

export default Content;
