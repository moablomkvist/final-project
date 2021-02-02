import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import { Provider } from 'react-redux'
//import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Nav } from './components/Nav'
import { StartPage } from './pages/StartPage'
import { GlossaryPage } from './pages/GlossaryPage'
import { ToolboxPage } from './pages/ToolboxPage'

//const reducer = combineReducers({
 // comment: comment.reducer
//})

//const store = configureStore({ reducer })


export const App = () => {
  return (
    //<Provider store= {store}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/glossary' exact>
            <GlossaryPage />  
          </Route>
          <Route path='/toolbox' exact>
          <ToolboxPage />
          </Route>  
        </Switch>
      </BrowserRouter>
    //</Provider>
  )
}
