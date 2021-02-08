import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import { patternReducer } from 'reducers/patternReducer'
import { userReducer } from 'reducers/userReducer'

import { StartPage } from './pages/StartPage'

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
      <StartPage />
      </BrowserRouter>
    </Provider>
  )
}
