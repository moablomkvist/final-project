import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { favouriteReducer } from 'reducers/favouriteReducer';

export const FavouritesPage = () => {
  const history = useHistory();
  const accessToken = useSelector((store) => store.userReducer.login.accessToken);
  const allFavourites = useSelector((store) => store.favouriteReducer.list.items);
  const dispatch = useDispatch();
    
  const handleClick = ( patternId ) => {
    dispatch(favouriteReducer.actions.deleteFavourite({ id: patternId }));
  };
  const handleChange = () => {
    dispatch(favouriteReducer.actions.clearAll());
  };

  useEffect(() => {
    if (!accessToken) {
      history.push("/")
    }
  }, [history, accessToken]);

  return (
    <>
      <h1>Favourite Patterns</h1>
      <div>
        {allFavourites.map((item) => (
          <div
            button onClick={handleClick}
            id={item.id}>
            </div>
        ))}
      </div>
      {allFavourites.length > 0 &&
        <button
          className="clear-all-button"
          onClick={handleChange}>
          Clear all favourites
        </button>}
    </>
  )
};