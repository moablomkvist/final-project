import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Nav } from './components/Nav'
import { StartPage } from './components/StartPage'
import { AllPatterns } from './components/AllPatterns'
import { Glossary } from './components/Glossary'
import { RowCounter } from './components/RowCounter'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <StartPage />
        </Route>
        <Route path='/glossary' exact>
          <Glossary />  
        </Route>
        <Route path='/rowcounter' exact>
        <RowCounter />
        </Route>  
        <AllPatterns/>
      </Switch>
    </BrowserRouter>
  )
}
