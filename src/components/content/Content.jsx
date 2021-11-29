import React from "react";

//import component
import Slide from "./slide/Slide";
import Support from "./support/Support";
import Selling from "./selling/Selling";
import New from "./new/New";
import Popular from "./popular/Popular";

//style
import classes from "./Content.module.scss";
//image
import banner from "./../../images/banner.png"

function Content() {
  return (
    <div className={classes.content}>
      <Slide />
      <Support />
      <h2 className={classes.content_title}>
        top sản phẩm bán chạy trong tuần
      </h2>
      <Selling />
      <h2 className={classes.content_title}>sản phẩm mới</h2>
      <New />
      <img className={classes.content_banner} src={banner} alt="banner" />
      <h2 className={classes.content_title}>phổ biến</h2>
      <Popular/>
    </div>
  );
}

export default Content;
