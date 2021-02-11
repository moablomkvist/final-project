import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { favouriteReducer } from 'reducers/favouriteReducer';

export const FavouritesPage = () => {
  const dispatch = useDispatch()
  const patterns = useSelector((store) => store.favouriteReducer.items)

  return (
    <>
      {patterns.map((pattern) => (
        <section>
        <li key={pattern._id} pattern={pattern}>
          <a href={pattern.source} alt="pattern description">
          <img src={pattern.imageSource} alt="pattern"/>
        </a>
        </li>
        <button type="button" onClick={() => dispatch(favouriteReducer.actions.deleteFavourite(pattern))}>-</button>
        </section>
      ))}
    </>
  )
};