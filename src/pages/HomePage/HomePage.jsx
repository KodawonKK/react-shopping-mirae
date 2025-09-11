import React from "react";
import styles from "./HomePage.module.css";
import banner1 from "../../assets/banner/banner_test.jpg";
// import banner2 from "../../assets/banner/banner2.jpg";
import banner2 from "../../assets/banner/banner3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductSlide from "../../components/common/ProductSlide/ProductSlide";
import BestSlide from "../../components/Best/BestSlide";

const HomePage = () => {
  const bannerList = [
    {
      img: banner1,
      title: "Season Sale",
      subtitle: "Up to 50% Off"
    },
    {
      img: banner2,
      title: "Wear the Tomorrow",
      subtitle: ""
    }
  ];
  return (
    <div>
      <div className={styles.bannerWrap}>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {bannerList.map((item, idx) => (
            <SwiperSlide key={idx} className={styles.bannerImgWrap}>
              <img src={item.img} alt="배너" />
              <div className={styles.commentWrap}>
                <h3 className={styles.comment}>{item.title}</h3>
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ProductSlide title={"신상품"} />
      <BestSlide />
    </div>
  );
};

export default HomePage;
