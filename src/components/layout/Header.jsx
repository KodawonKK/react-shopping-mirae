import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/logo/logo.png";
import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "../Icon/Icon";

const Header = () => {
  const menu = [
    { title: "세일", url: "/" },
    { title: "베스트", url: "/" },
    { title: "전체상품", url: "/all" },
    { title: "신상품", url: "/" }
  ];
  const rightMenuIcons = [
    <SearchIcon size={25} color={"#000"} />,
    <UserIcon size={25} color={"#000"} />,
    <HeartIcon size={25} color={"#000"} />,
    <CartIcon size={25} color={"#000"} />
  ];

  return (
    <div className={styles.headerWrap}>
      <div className={styles.logoWrap}>
        <img src={Logo} alt="로고" />
      </div>
      <div className={styles.centerMenuWrap}>
        {menu.map((item, idx) => (
          <Link to={item.url} key={idx} className={styles.centerMenu}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.rightMenu}>
        {rightMenuIcons.map((item, idx) => (
          <Link key={idx}>{item}</Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
