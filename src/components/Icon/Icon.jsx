import React from "react";
import { GrCart, GrSearch, GrFavorite } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";

export const SearchIcon = (props) => <GrSearch {...props} />;
export const UserIcon = (props) => <LuUserRound {...props} />;
export const HeartIcon = (props) => <GrFavorite {...props} />;
export const CartIcon = (props) => <GrCart {...props} />;
