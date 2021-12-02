import React from "react";
import './description.scss'
import img1 from "./../../../images/products/product-01 (1).jpg";
import img2 from "./../../../images/products/product-01 (2).jpg";



function index() {
  return (
    <div className="detail-product">
      <div className="detail-product__wrap">
        <div className="detail-product__wrap__slide-1">
          <img src={img1} alt="" className="detail-product__wrap__slide-1__img" />
          <img src={img2} alt="" className="detail-product__wrap__slide-1__img" />
        </div>
        <div className="detail-product__wrap__slide-2">
          <img src={img1} alt="" className="detail-product__wrap__slide-2__img" />
        </div>
        <div className="detail-product__wrap__slide-3">
          <h2 className="detail-product__wrap__slide-3__title">
            áo thun dinosaur 01
          </h2>
          <p className="detail-product__wrap__slide-3__price">189,000</p>
          <p className="detail-product__wrap__slide-3__labe">màu sắc</p>
          <div className="detail-product__wrap__slide-3-list__color">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="detail-product__wrap__slide-3__labe">kích cỡ</p>
          <div className="detail-product__wrap__slide-3-list__size">
            <span>s</span>
            <span>m</span>
            <span>l</span>
            <span>xl</span>
          </div>
          <p className="detail-product__wrap__slide-3__labe">số lượng</p>
          <div className="detail-product__wrap__slide-3__quantity">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="detail-product__wrap__slide-3-list__btn">
            <span>thêm vào giỏ hàng</span>
            <span>mua ngay</span>
          </div>
        </div>
      </div>
      {/* <div className="detail-product__description">
        <h1 className="detail-product__description__title">
          chi tiết sản phẩm{" "}
        </h1>
        <p className="detail-product__description__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est
          ipsam modi. Quasi non in a aperiam soluta similique vel harum,
          inventore nulla corporis ut officia provident cumque obcaecati
          exercitationem.
        </p>
        <p className="detail-product__description__item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          dolore eum. Quidem beatae aliquam temporibus ad corporis sequi veniam
          quia mollitia tempore, quae nemo nostrum harum, dicta pariatur quos,
          culpa eligendi dolorum? Voluptas porro voluptate deleniti debitis
          architecto voluptatum reiciendis ex provident perferendis! Quaerat,
          quos repellendus? Veritatis magni consequuntur incidunt.Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Tempora, dolore eum.
          Quidem beatae aliquam temporibus ad corporis sequi veniam quia
          mollitia tempore, quae nemo nostrum harum, dicta pariatur quos, culpa
          eligendi dolorum? Voluptas porro voluptate deleniti debitis architecto
          voluptatum reiciendis ex provident perferendis! Quaerat, quos
          repellendus? Veritatis magni consequuntur incidunt.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Tempora, dolore eum. Quidem
          beatae aliquam temporibus ad corporis sequi veniam quia mollitia
          tempore, quae nemo nostrum harum, dicta pariatur quos, culpa eligendi
          dolorum? Voluptas porro voluptate deleniti debitis architecto
          voluptatum reiciendis ex provident perferendis! Quaerat, quos
          repellendus? Veritatis magni consequuntur incidunt.
        </p>
        <p className="detail-product__description__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est
          ipsam modi. Quasi non in a aperiam soluta similique vel harum,
          inventore nulla corporis ut officia provident cumque obcaecati
          exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Facilis est ipsam modi. Quasi non in a aperiam soluta similique
          vel harum, inventore nulla corporis ut officia provident cumque
          obcaecati exercitationem.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis est ipsam modi. Quasi non in a aperiam
          soluta similique vel harum, inventore nulla corporis ut officia
          provident cumque obcaecati exercitationem.
        </p>
      </div> */}
    </div>
  );
}

export default index;
