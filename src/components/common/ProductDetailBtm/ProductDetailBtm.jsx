import React, { useState } from "react";
import styles from "./ProductDetailBtm.module.css";

const ProductDetailBtm = ({ idx }) => {
  const [activeIndex, setActiveIndex] = useState(idx);
  const productBtmMenu = ["상세정보", "리뷰", "Q&A", "배송/교환/환불 안내"];

  const menuClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div className={styles.productDetailBtmMenu}>
      {productBtmMenu.map((item, idx) => (
        <div className={`${styles.productBtmList} ${activeIndex === idx ? styles.active : ""}`} key={idx} onClick={() => menuClick(idx)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProductDetailBtm;
