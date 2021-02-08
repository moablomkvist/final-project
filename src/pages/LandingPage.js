import React from 'react'
import { useDispatch } from 'react-redux'
import { userReducer} from '../reducers/userReducer';

import { HandlePattern } from '../components/HandlePattern'

export const LandingPage = () => {
  const dispatch = useDispatch();

  const handleLogoutButton = () => {
    dispatch(userReducer.actions.setStatusMessage({ statusMessage: 'Logged out' }));
    dispatch(userReducer.actions.setAccessToken({ accessToken: null }));
    dispatch(userReducer.actions.setUserId({ userId: 0 }));
    dispatch(userReducer.actions.setName({ name: '' }))
  }
  
  return (
    <>
      <HandlePattern />

      <button
        type="submit"
        onClick={() => handleLogoutButton()}
        value="Logout"
      >Logga ut</button>
    </>
  )
}