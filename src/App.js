import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import { patternReducer } from 'reducers/patternReducer'
import { userReducer } from 'reducers/userReducer'

import { StartPage } from './pages/StartPage'

import { PostPage } from './pages/PostPage'
import { GlossaryPage } from './pages/GlossaryPage'
import { ToolboxPage } from './pages/ToolboxPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Nav } from './components/Nav'
import { HandlePattern } from './components/HandlePattern'

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

      <BrowserRouter>
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
      </BrowserRouter>

      <StartPage />
    </Provider>
  )
}
