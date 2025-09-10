import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Product.module.css";
import product from "../../../data/productList.json";
import Card from "../card/Card";

const ProductSlide = ({ title }) => {
  return (
    <div className={styles.productSlideWrap}>
      <h3 className={styles.title}>{title}</h3>
      <Swiper slidesPerView={4} spaceBetween={10} loop>
        {product?.map((item, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlide;
