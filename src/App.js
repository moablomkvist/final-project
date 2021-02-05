import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import { patternReducer } from 'reducers/patternReducer'
import { userReducer } from 'reducers/userReducer'

import { Nav } from './components/Nav'
import { StartPage } from './pages/StartPage'
import { GlossaryPage } from './pages/GlossaryPage'
import { ToolboxPage } from './pages/ToolboxPage'
import { LandingPage } from './pages/LandingPage'

const reducers = combineReducers({
  patternReducer: patternReducer.reducer,
  userReducer: userReducer.reducer,

});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export const App = () => {
  return (
    <Provider store= {store}>
    <StartPage />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/glossary' exact>
            <GlossaryPage />  
          </Route>
          <Route path='/toolbox' exact>
          <ToolboxPage />
          </Route>  
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
