import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import { Provider } from 'react-redux'
//import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Nav } from './components/Nav'
import { StartPage } from './components/StartPage'
import { Glossary } from './components/Glossary'
import { RowCounter } from './components/RowCounter'

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
            <Glossary />  
          </Route>
          <Route path='/rowcounter' exact>
          <RowCounter />
          </Route>  
        </Switch>
      </BrowserRouter>
    //</Provider>
  )
}
