import React from "react";
import Button from "../Button";

//image
import img1 from "./../../../images/products/product-01 (1).jpg";
import img2 from "./../../../images/products/product-02 (1).jpg";
import img3 from "./../../../images/products/product-03 (1).jpg";
import img4 from "./../../../images/products/product-04 (1).jpg";

//style
import classes from "./Selling.module.scss";

//fake data
const dataSelling = [
  {
    image: img1,
    title: "quần jean 12",
    priceN: "194,000",
    priceO: "399,000",
  },
  {
    image: img2,
    title: "quần jean 12",
    priceN: "194,000",
    priceO: "399,000",
  },
  {
    image: img3,
    title: "quần jean 12",
    priceN: "194,000",
    priceO: "399,000",
  },
  {
    image: img4,
    title: "quần jean 12",
    priceN: "194,000",
    priceO: "399,000",
  },
];

function Selling() {
  return (
    <div className={classes.selling}>
      {dataSelling.map((data) => (
        <div className={classes.selling_item}>
          <img src={data.image} alt="" className={classes.selling_item_img} />
          <div className={classes.selling_item_info}>
            <p className={classes.selling_item_info_title}>{data.title}</p>
            <p className={classes.selling_item_info_price}>
              <span>{data.priceN}</span>
              <span>{data.priceO}</span>
            </p>
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Selling;
