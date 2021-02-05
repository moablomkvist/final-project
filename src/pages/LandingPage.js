import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Nav } from '../components/Nav'
import { GlossaryPage } from '../pages/GlossaryPage'
import { ToolboxPage } from '../pages/ToolboxPage'
import { HandlePattern } from '../components/HandlePattern'

export const LandingPage = () => {
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
    </>
  )
}