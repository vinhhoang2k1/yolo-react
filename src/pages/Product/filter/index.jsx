import { useState, useEffect } from "react";
import "./filter.scss";

const categorys = ["áo thun", "áo sơ mi", "jean"];
const colors = ["Trắng", "Hồng", "Vàng", "Cam", "Đen", "Xanh dương"];
const sizes = ["S", "m", "l", "xl", "xxl"];
function Index() {
  
  return (
    <div className="filter">
      <ul className="filter-item">
        <h2 className="filter-item__heading">danh mục sản phẩm </h2>
        {categorys.map((cat, index) => (
          <li className="filter-item__content">
            <input  type="checkbox" />
            <label htmlFor="">{cat}</label>
          </li>
        ))}
      </ul>
      <ul className="filter-item">
        <h2 className="filter-item__heading">màu sắc</h2>
        {colors.map((color, index) => (
          <li className="filter-item__content">
            <input  type="checkbox"  />
            <label htmlFor="">{color}</label>
          </li>
        ))}
      </ul>
      <ul className="filter-item">
        <h2 className="filter-item__heading">size </h2>
        {sizes.map((size, index) => (
          <li className="filter-item__content">
            <input  type="checkbox"  />
            <label htmlFor="">{size}</label>
          </li>
        ))}
      </ul>
      <ul className="filter-item">
        <span className="filter__btn-delete" >
          xóa bộ lọc
        </span>
      </ul>
    </div>
  );
}

export default Index;
