import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { favouriteReducer } from "reducers/favouriteReducer";

import { SymbolButton } from "styling/lib/SymbolButton";

export const FavouritePattern = ({ pattern }) => {
  const dispatch = useDispatch();
  const favouriteItem = useSelector((store) =>
    store.favouriteReducer.items.find((item) => item._id === pattern._id)
  );
  const toggleFav = () => {
    dispatch(favouriteReducer.actions.addFavourite(pattern));
  };
  const toggleDeleteFav = () => {
    dispatch(favouriteReducer.actions.deleteFavourite(pattern));
  };

  return (
    <div>
      {favouriteItem ? (
        <SymbolButton onClick={toggleDeleteFav}>
          <img
            src="/assets/star.svg"
            alt="favourite-star"
            aria-label="star"
            className="fav-mark"
          />
        </SymbolButton>
      ) : (
        <SymbolButton onClick={toggleFav}>
          <img 
            src="/assets/star.svg" 
            alt="favourite-star" 
            aria-label="star" 
          />
        </SymbolButton>
      )}
    </div>
  );
};
