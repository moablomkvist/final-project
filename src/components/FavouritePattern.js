import React from "react";
import { useDispatch } from "react-redux";

import { favouriteReducer } from "reducers/favouriteReducer";

import { SymbolButton } from "styling/lib/SymbolButton";

export const FavouritePattern = ({ pattern }) => {
  const dispatch = useDispatch(); 

  return (
  <SymbolButton
  onClick={() =>
    dispatch(favouriteReducer.actions.addFavourite(pattern))
  }
  >
  <img
    src="/assets/star.svg"
    alt="favourite-star"
    aria-label="star"
  />
</SymbolButton>
)
};