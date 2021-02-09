import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PostPage } from 'pages/PostPage'
import { GlossaryPage } from 'pages/GlossaryPage'
import { ToolboxPage } from 'pages/ToolboxPage'

import { HandlePattern } from 'components/HandlePattern'
import { Nav } from '../components/Nav'
import { Logout } from '../components/Logout'



export const LandingPage = () => {
  
  return (
    <> 
      <Nav />
      <Switch>
        <Route path='/' exact>
          <HandlePattern />
        </Route>
        <Route path='/post-pattern' exact>
          <PostPage />
        </Route>
        <Route path='/glossary' exact>
          <GlossaryPage />  
        </Route>
        <Route path='/toolbox' exact>
          <ToolboxPage />
        </Route>  
      </Switch>
      <Logout />
    </>
  )
}