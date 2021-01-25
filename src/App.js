import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AllPatterns } from './components/AllPatterns'
import { Glossary } from './components/Glossary'

export const App = () => {
  return (
    <div>
      <Glossary />
      <AllPatterns/>
      Find me in src/app.js!
    </div>
  )
}
