import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userReducer} from '../reducers/userReducer';

import { Nav } from '../components/Nav'
import { GlossaryPage } from '../pages/GlossaryPage'
import { ToolboxPage } from '../pages/ToolboxPage'
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
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <HandlePattern />
          </Route>
          <Route path='/glossary' exact>
            <GlossaryPage />  
          </Route>
          <Route path='/toolbox' exact>
          <ToolboxPage />
          </Route>  
        </Switch>
        <HandlePattern />
      </BrowserRouter>
      <button
        type="submit"
        onClick={() => handleLogoutButton()}
        value="Logout"
      >Logga ut</button>
    </>
  )
}