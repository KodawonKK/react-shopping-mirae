import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./ProductDetail.module.css";
import product from "../../data/productList.json";
import productReview from "../../data/productReview.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiShare2 } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "swiper/css";
import LikeBtn from "../../components/common/button/LikeBtn/LikeBtn";
import { SlArrowRight, SlArrowDown, SlArrowUp } from "react-icons/sl";
import DetailImg from "../../assets/item/detail-image.png";
import ModelInfoImg from "../../assets/item/model-info.png";
import ProductSlide from "../../components/common/ProductSlide/ProductSlide";
import ProductDetailBtm from "../../components/common/ProductDetailBtm/ProductDetailBtm";
import { FaHeart } from "react-icons/fa6";
import HorizontalBar from "../../components/common/chart/HorizontalBar";
import ProfileImg from "../../assets/profile/profile-img.jpg";
import HeartRating from "../../components/common/HeartRating/HeartRating";
import faqData from "../../data/qnaList.json";
import deliveryPolicy from "../../data/deliveryPolicy.json";

const ProductDetail = () => {
  const id = useParams().id;
  const productData = product.find((item) => item.id === Number(id));
  const [imgUrl, setImgUrl] = useState(productData?.id);
  const [count, setCount] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const discountRate = formatPrice(productData?.price?.sale, productData?.price?.original);
  const formatter = new Intl.NumberFormat("ko-KR");
  const paymentMenu = [
    { title: "카드 혜택", info: "무이자 혜택" },
    { title: "멤버십 혜택", info: "등급별 혜택보기" },
    { title: "배송예상", info: "무료배송" }
  ];
  const productEtcMenu = ["배송안내", "모델 및 사이즈 정보"];

  // const imgClick = () => {
  //   setImgUrl(id);
  // };
  const amountCal = () => {
    const salePrice = Number(productData?.price?.sale?.replace(/,/g, "")) || 0;
    return formatter.format(salePrice * count);
  };

  useEffect(() => {
    setImgUrl(productData?.id);
  }, [productData?.id]);

  return (
    <div className={styles.productDetailWrap}>
      <div className={styles.productDetail}>
        {/* LEFT */}
        <div className={styles.productDetailLeft}>
          <div className={styles.productImgWrap}>
            <img src={require(`../../assets/item/${imgUrl}.jpg`)} alt="상품이미지" width="100%" />
          </div>
          <div className={styles.productImgBtm}>
            <Swiper slidesPerView={5} spaceBetween={10} loop>
              {product.map((item, idx) => (
                <SwiperSlide key={idx} className={styles.productImg}>
                  <img src={require(`../../assets/item/${item.id}.jpg`)} alt="상품이미지" width="100%" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.productDetailRight}>
          <div className={styles.productDetailTop}>
            <div className={styles.productTitleWrap}>
              <h3 className={styles.productTitle}>{productData.title}</h3>
              <CiShare2 color="#999" />
            </div>
            <div className={styles.priceWrap}>
              <span className={styles.dicount}>{discountRate}%</span>
              <span className={styles.sale}>{productData?.price?.sale}</span>
              <span className={styles.original}>{productData?.price?.original}</span>
            </div>
            <span className={styles.reviewCount}>리뷰 0</span>
          </div>
          <div className={styles.paymentInfoWrap}>
            {paymentMenu.map((item, idx) => (
              <div className={styles.paymentInfo} key={idx}>
                <span className={styles.payTitle}>{item.title}</span>
                <span className={styles.payInfo}>{item.info}</span>
              </div>
            ))}
          </div>
          {/* color/size 옵션 선택 */}
          <div className={styles.productDetailOption}>
            <div className={styles.productOptionWrap}>
              <div className={styles.option}>
                <span>COLOR</span>
                <div className={styles.optionBtnWrap}>
                  <button>
                    <span className={styles.color}></span>NAVY
                  </button>
                  <button>
                    <span className={styles.color}></span>BROWN
                  </button>
                </div>
              </div>
              <div className={styles.option}>
                <span>SIZE</span>
                <div className={styles.optionBtnWrap}>
                  <button className={styles.size}>S</button>
                  <button className={styles.size}>M</button>
                  <button className={styles.size}>L</button>
                </div>
              </div>
            </div>
          </div>
          {/* totalAmount */}
          <div className={styles.productDetailTotal}>
            <div className={styles.totalOptionWrap}>
              <p className={styles.totlTitle}>{productData.title}</p>
              <p className={styles.totlOption}>- NAVY / S</p>
            </div>
            <div className={styles.amountButtonWrap}>
              <div className={styles.amountButton}>
                <button
                  className={styles.minus}
                  onClick={() => {
                    setCount((prev) => (prev > 0 ? prev - 1 : 0));
                  }}
                >
                  －
                </button>
                <span className={styles.count}>{count}</span>
                <button
                  className={styles.plus}
                  onClick={() => {
                    setCount((prev) => prev + 1);
                  }}
                >
                  ＋
                </button>
              </div>
              <div className={styles.totalAmount}>
                {amountCal()}
                <span>원</span>
              </div>
            </div>
          </div>
          <div className={styles.purchaseBtnWrap}>
            <div className={styles.btn}>
              <LikeBtn size={25} />
            </div>
            <div className={styles.btn}>
              <HiOutlineShoppingBag color="#888" size={25} />
            </div>
            <button className={styles.purchase}>구매하기</button>
          </div>
          <div className={styles.productEtcInfo}>
            {productEtcMenu.map((item, idx) => (
              <div className={styles.productEtcList} key={idx}>
                <div>{item}</div>
                <SlArrowRight size={15} color="#d5d5d5" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.productDetailBtm}>
        <ProductDetailBtm idx={0} />
        <div className={styles.detailImg}>
          <img src={DetailImg} alt="상세정보이미지" />
        </div>
        <div className={styles.modelInfoImg}>
          <img src={ModelInfoImg} alt="" />
        </div>
        <div className={styles.reviewWrap}>
          <ProductDetailBtm idx={1} />
          {/* review ratio */}
          <div className={styles.reviewTop}>
            <div className={styles.reviewScore}>
              <FaHeart color="#ff7f7f" size={38} style={{ marginTop: "5px" }} />
              <span>4.9</span>
              <span>/</span>
              <span>5</span>
            </div>
            <div className={styles.scoreRatioWrap}>
              <div className={styles.scoreGraphWrap}>
                <HorizontalBar />
              </div>
            </div>
          </div>
          {/* review */}
          {productReview.map((item, idx) => (
            <div className={styles.reviewContentWrap} key={idx}>
              <div className={styles.profileWrap}>
                <div className={styles.profileImgWrap}>
                  <img src={ProfileImg} alt="프로필 이미지" />
                </div>
                <span className={styles.nickname}>{item.nickname}</span>
              </div>
              <div className={styles.profileRight}>
                <HeartRating score={item.score} />
                <div className={styles.content}>
                  <div className={styles.selectOption}>
                    <h3 className={styles.optionTitle}>옵션:</h3>
                    <span>{item.options[0]}</span>
                    <span>{item.options[1]}</span>
                    <span>{item.options[2]}</span>
                  </div>
                  <p className={styles.review}>{item.review}</p>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.reviewAllBtnWrap}>
            <button className={styles.reviewAllBtn}>리뷰 전체보기</button>
          </div>
        </div>
        <ProductDetailBtm idx={2} />
        <div className={styles.faqWrap}>
          <div className={styles.faqHeader}>
            {/* <h2>자주 묻는 질문(FAQ)</h2> */}
            <p>배송, 교환/반품, 상품 관련 궁금한 점을 확인하고 필요한 경우 문의를 남겨보세요.</p>
          </div>
          {faqData.map((item, idx) => (
            <div className={styles.faqList} key={idx}>
              <div
                className={styles.questionWrap}
                onClick={() => {
                  setOpenIdx(openIdx === idx ? null : idx);
                }}
              >
                <p>Q. {item.question}</p>
                {openIdx === idx ? <SlArrowUp /> : <SlArrowDown />}
              </div>
              {openIdx === idx && <div className={styles.answerWrap}>{item.answer}</div>}
            </div>
          ))}
        </div>
        <ProductDetailBtm idx={3} />
        <div className={styles.deliveryPolicyWrap}>
          {deliveryPolicy.map((item, idx) => (
            <div className={styles.deliveryPolicyList} key={idx}>
              <div className={styles.deliveryTitle}>{item.title}</div>
              <div className={styles.deliveryContent}>{item.details}</div>
            </div>
          ))}
        </div>
        <div className={styles.recommendWrap}>
          <h3 className={styles.recommTitle}>함께 코디하기 좋은 상품</h3>
          <ProductSlide />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
