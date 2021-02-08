import React from 'react'

import { RowCounter } from '../components/RowCounter'
import { RulerTool } from '../components/RulerTool'

export const ToolboxPage = () => {
  return(
    <>
      <RulerTool />
      <RowCounter />
    </>
  )
}