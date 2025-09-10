import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/logo/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.footerTop}>
        <div className={styles.leftMenu}>
          <div className={styles.logoImg}>
            <img src={Logo} alt="로고" />
          </div>
          <div className={styles.sns}>
            <FaXTwitter size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={23} />
            <RiKakaoTalkFill size={23} />
          </div>
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.menu}>
            <h3>NOTICE</h3>
            <span>- 배송안내</span>
          </div>
          <div className={styles.menu}>
            <h3>ABOUT US</h3>
            <span>- 브랜드소개</span>
            <span>- 이용약관/개인정보처리방침</span>
          </div>
          <div className={styles.menu}>
            <h3>DELIVERY</h3>
            <span>- 배송/교환/반품 안내</span>
          </div>
        </div>
      </div>
      <div className={styles.footerBtm}>
        <h4>평일 AM 11 ~ PM 5 / 점심시간 PM 12 ~ PM 1 / 토요일, 일요일, 공휴일 휴무</h4>
        <p>Mirae Fashion</p>
        <p>사업자 등록번호: 000-00-00000</p>
        <p>통신판매업 신고번호: 2225-서울-0000</p>
        <p>주소:서울특별시 어쩌구 어쩌구</p>
        <p className={styles.footerConnect}>전화: 1234-5678 이메일: support@mirae***.com</p>
      </div>
    </div>
  );
};

export default Footer;
