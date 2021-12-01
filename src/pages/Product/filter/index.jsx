import React from "react";
import './filter.scss';

const categorys = ["áo thun", "áo sơ mi", "jean"];
const colors = ["Trắng", "Hồng", "Vàng", "Cam", "Đen", "Xanh dương"];
const sizes = ["S", "m", "l", "xl", "xxl"];
function index() {
  return (
    <div className="filter">
      <ul className="filter-item">
        <h2 className="filter-item__heading">danh mục sản phẩm </h2>
        {categorys.map((cat) => (
          <li className="filter-item__content">
            <input type="radio" />
            <label htmlFor="">{cat}</label>

          </li>
        ))}
      </ul>
      <ul className="filter-item">
        <h2 className="filter-item__heading">màu sắc</h2>
        {colors.map((color) => (
          <li className="filter-item__content">
            <input type="radio" />
            <label htmlFor="">{color}</label>
          </li>
        ))}
      </ul>
      <ul className="filter-item">
        <h2 className="filter-item__heading">size </h2>
        {sizes.map((size) => (
          <li className="filter-item__content">
            <input type="radio" />
            <label htmlFor="">{size}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default index;
