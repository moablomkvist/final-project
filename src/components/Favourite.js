import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

import { favouriteReducer } from '../reducers/favouriteReducer';

export const Favourite = () => {
  const { patternId } = useParams();
  const dispatch = useDispatch(); 
  const favouritePatterns = useSelector((store) => store.favouriteReducer.list.items);
  const isFavorite = !!favouritePatterns.find(item => item.id === patternId);

  const handleClick = (isFavourite) => {
    if (isFavourite) {
    //   dispatch(favouriteReducer.actions.deleteFavourite({ id: patternId })
    //   )
    // } else {
      dispatch(favouriteReducer.actions.addFavourite({ id: patternId })
      )
    };
  };
  

  return(
    <>
    <div isFavourite={isFavorite}></div>
    <button 
      onClick={handleClick}>
    </button>
  </> 
  )
}

