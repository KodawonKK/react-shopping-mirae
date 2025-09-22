import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import LikeBtn from "../button/LikeBtn/LikeBtn";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const goProductPage = () => {
    navigate(`/product/${item?.id}`);
  };

  const discountRate = formatPrice(item?.price?.sale, item?.price?.original);

  return (
    <div onClick={goProductPage} className={styles.cardWrap}>
      <div className={styles.cardImgWrap}>
        <img src={require(`../../../assets/item/${item?.id}.jpg`)} alt="상품" width={"100%"} className={styles.cardImg} />
      </div>

      <h3 className={styles.productTitle}>{item?.title}</h3>
      <div className={styles.cardBtm}>
        <div className={styles.priceWrap}>
          <span className={styles.dicount}>{discountRate}%</span>
          <span className={styles.sale}>{item?.price?.sale}</span>
          <span className={styles.original}>{item?.price?.original}</span>
        </div>
        <div className={styles.iconWrap}>
          <LikeBtn size={21} />
          <HiOutlineShoppingBag color="#888" size={21} />
        </div>
      </div>

      <div className={styles.review}>리뷰 0</div>
    </div>
  );
};

export default Card;
