import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartRating = ({ score }) => {
  const max = 5;

  return (
    <div style={{ display: "flex", gap: "1px" }}>
      {Array.from({ length: max }, (_, i) => (i < score ? <FaHeart key={i} color="#ff7f7f" /> : <FaRegHeart key={i} color="#ff7f7f" />))}
    </div>
  );
};

export default HeartRating;
