import React from 'react'
import styled from 'styled-components'

import { LoginSignup } from 'components/LoginSignup'

export const StartPage = () => {
  return (
    <StartPageContainer>
      <Header>KNITTING CIRCLE</Header>
      <Payoff>Yes, I like to knit. No, im not 'Old'</Payoff>
      <LoginSignup />
    </StartPageContainer>
  )
}

const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #a4a99b;
  font-family: 'Fraunces';
  border: solid 4px #FFFFFF;
  margin: 20px;
`;
const Header = styled.h1`
  font-size: 55px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0px;
`;
const Payoff = styled.h4`
  font-size: 20px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
`