import React from 'react'
import styled from 'styled-components'
import { LoginSignup } from 'components/LoginSignup'

export const StartPage = () => {
  return (
    <StartPageContainer>
      <LoginSignup />
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