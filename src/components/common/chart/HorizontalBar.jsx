import React from "react";
import styles from "./HorizontalBar/HorizontalBar.module.css";

const HorizontalBar = () => {
  const graphMenu = [
    { kind: "색상", content: "똑같아요", percent: "100%" },
    { kind: "사이즈", content: "잘 맞아요", percent: "90%" }
  ];
  return (
    <div className={styles.horizontalWrap}>
      {graphMenu.map((item, idx) => (
        <div className={styles.horizontalGraph} key={idx}>
          <div className={styles.kind}>{item.kind}</div>
          <div className={styles.content}>{item.content}</div>
          <div className={styles.horizontalBarWrap}>
            <div className={styles.horizontalBar} style={{ width: item.percent }}></div>
          </div>
          <div className={styles.percent}>{item.percent}</div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBar;
