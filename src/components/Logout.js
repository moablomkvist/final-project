import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userReducer } from 'reducers/userReducer'

import { Button } from 'styling/lib/Button'

export const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  useSelector((store) => store.userReducer.login.accessToken);
  useSelector((store) => store.userReducer.login.userId);
  useSelector((store) => store.userReducer.login.statusMessage);
  const dispatch = useDispatch();

  const handleLogoutButton = () => {
    dispatch(userReducer.actions.logout());
    setLoggedOut(true);
  };

  return (
    <>
      {loggedOut === false ? (
        <Button to="/" type="submit" onClick={handleLogoutButton}>
          Log out
        </Button>
      ) : (
        <></>
      )}
    </>
  )
};