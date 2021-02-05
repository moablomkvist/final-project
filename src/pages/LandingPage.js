import React from 'react'

import { HandlePattern } from '../components/HandlePattern'
import { PostPattern } from '../components/PostPattern'

export const LandingPage = () => {
  return (
    <>
      <HandlePattern />
        <p>Knitting</p>
      <HandlePattern />
      <PostPattern />
    </>
  )
}