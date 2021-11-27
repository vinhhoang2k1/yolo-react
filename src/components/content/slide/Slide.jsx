import React from "react";
import classes from "./Slide.module.scss";
import img1 from "./../../../images/slider/slide_1.png";
import img2 from "./../../../images/slider/slide_2.png";
import img3 from "./../../../images/slider/slide_3.png";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.scss"; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const images = [img1, img2, img3];
function Slide() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className="mySwiper"
      >
        {images.map((image) => {
          return (
            <SwiperSlide>
              <div className={classes.slide}>
                <div className={classes.slide_slogan}>
                  <h1>Polo nữ Pima cao cấp</h1>
                  <p>
                    Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải
                    pima. Nó tạo nên chất lượng tốt nhất cho bất kì sản phẩm
                    thời trang nào . Sợi vải pima dài và dày hơn vải cotton
                    thông thường gấp đôi nhờ công nghệ dệt tân tiến. Điều đó là
                    cho kết cấu áo polo chắc chắn, bền chặt, hạn chế tối đa xù
                    lông, mềm mượt, bền màu , vông cùng đảm bảo sức khoe người
                    tiêu dùng
                  </p>
                  <a href="">Xem Chi Tiết</a>
                </div>
                <div className={classes.slide_img}>
                  <div className={classes.slide_img_wrap}>
                    <img src={image} alt="" />
                    <span></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slide;
