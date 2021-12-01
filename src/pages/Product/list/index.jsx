import React from "react";
import Button from './../../../components/content/Button'
import './list.scss'

import img1 from "./../../../images/products/product-01 (1).jpg";
import img2 from "./../../../images/products/product-02 (1).jpg";
import img3 from "./../../../images/products/product-03 (1).jpg";
import img4 from "./../../../images/products/product-04 (1).jpg";
const dataNew = [
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
function index() {
  return (
    <div className="product">
      {dataNew.map((data) => (
        <div className="product_item">
          <img src={data.image} alt="" className="product_item_img" />
          <div className="product_item_info">
            <p className="product_item_info_title">{data.title}</p>
            <p className="product_item_info_price">
              <span>{data.priceO}</span>
              <span>{data.priceN}</span>
            </p>
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
}

export default index;
