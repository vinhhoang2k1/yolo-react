import React from "react";
import classes from "./Support.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faGem, faHandHoldingHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
const dataSP = [
  {
    icon: <FontAwesomeIcon icon={faShoppingBag} />,
    title: "miễn phí giao hàng",
    description: "miễn phí  với đơn hàng > 239k",
  },
  {
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    title: "thanh toán COD",
    description: "thanh tóa khi nhận hàng (COD)",
  },
  {
    icon: <FontAwesomeIcon icon={faGem} />,
    title: "khách hàng VIP",
    description: "ưu đãi dành cho khách hàng VIP",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    title: "Hỗ trợ bảo hành",
    description: "đổi, sửa đồ tại tất cả store",
  },
];

function Support() {
  console.log(dataSP);
  return (
    <div className={classes.support}>
      {dataSP.map((data) => (
        <div className={classes.support_item}>
          <div className={classes.support_item_icon}>{data.icon}</div>
          <div className={classes.support_item_box}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Support;
