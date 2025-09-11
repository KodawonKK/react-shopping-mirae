import React from "react";
import styles from "./BestSlide.module.css";
import product from "../../data/productList.json";
import Card from "../common/Card/Card";

const BestSlide = () => {
  return (
    <div className={styles.bestSlideWrap}>
      <h3 className={styles.title}>베스트</h3>
      <div className={styles.bestSlide}>
        {product
          .slice()
          .sort((a, b) => a.grade - b.grade)
          .map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
      </div>
    </div>
  );
};

export default BestSlide;
