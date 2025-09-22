import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const LikeBtn = ({ size }) => {
  const [click, setClick] = useState(false);
  const likeBtnClick = (e) => {
    e.stopPropagation();
    setClick((prev) => !prev);
  };
  return (
    <div style={{ cursor: "pointer" }}>
      {click ? <GoHeartFill onClick={likeBtnClick} size={size} color="#ff7f7f" /> : <GoHeart onClick={likeBtnClick} size={size} color="#888" />}
    </div>
  );
};

export default LikeBtn;
