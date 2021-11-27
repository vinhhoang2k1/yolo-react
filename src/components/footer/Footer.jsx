import React from "react";
import classes from "./Footer.module.scss";
import logo from "./../../images/Logo-2.png";

function footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_item}>
        <h2 className={classes.footer_item_title}>tổng đài hỗ trợ</h2>
        <div className={classes.footer_item_content}>
          <p>
            <span> liên hệ đặt hàng </span>
            <span className={classes.active}>12345678</span>
          </p>
          <p>
            <span> liên hệ đặt hàng </span>
            <span className={classes.active}>12345678</span>
          </p>
          <p>
            <span> liên hệ đặt hàng </span>
            <span className={classes.active}>12345678</span>
          </p>
        </div>
      </div>
      <div className={classes.footer_item}>
        <h2 className={classes.footer_item_title}>về YOLO</h2>
        <div className={classes.footer_item_content}>
          <p>giới thiệu</p>
          <p>liên hệ</p>
          <p>tuyển dụng</p>
          <p>tin tức</p>
          <p>hệ thống cửa hàng </p>
        </div>
      </div>
      <div className={classes.footer_item}>
        <h2 className={classes.footer_item_title}>chăm sóc khách hàng </h2>
        <div className={classes.footer_item_content}>
          <p>chính sách đổi trả</p>
          <p>chính sách bảo hành</p>
          <p>chính sách hoàn tiền</p>
        </div>
      </div>
      <div className={classes.footer_item}>
        <img className={classes.footer_item_logo} src={logo} alt="logo-yolo" />
        <p>
          Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
          triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng
          động, tich cực hơn
        </p>
      </div>
    </div>
  );
}

export default footer;
