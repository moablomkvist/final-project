import React from 'react'
import styled from 'styled-components'
import { userLoginSignup } from './userLoginSignup'

export const StartPage = () => {
  return (
    <StartPageContainer>
      <userLoginSignup />
    </StartPageContainer>
  )
}

const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #a4a99b;
  font-family: 'Fraunces';
`