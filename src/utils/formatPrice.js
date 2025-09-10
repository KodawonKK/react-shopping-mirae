import React from "react";

export const formatPrice = (price, orgPrice) => {
  const salePrice = Number(price.replace(",", ""));
  const originPrice = Number(orgPrice.replace(",", ""));
  const discountRate = Math.floor(((originPrice - salePrice) / originPrice) * 100);
  return discountRate;
};
