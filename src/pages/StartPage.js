import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { LoginSignup } from 'components/LoginSignup'
import { Header } from 'styling/lib/Header'
import { LandingPage } from './LandingPage'

export const StartPage = () => {
  
const accessToken = useSelector((store) => store.userReducer.login.accessToken)
  
  if (!accessToken) { 
  return (
    <StartPageContainer>
      <Header>
        <p className="SubTitle">Yes, I like to knit. No, im not 'Old'</p>
        <h1 className="HeadTitle">KNITTING CIRCLE</h1>
      </Header>
      <CoverPhoto src="https://i.pinimg.com/564x/f9/19/79/f91979a3628229f6f55444b495cf5b62.jpg" alt="knitting-model"></CoverPhoto>
      <LoginSignup />
    </StartPageContainer>
  )
} else {  
  return <LandingPage/>// If user is logged in, show profile
}}

const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #a4a99b;
  font-family: 'Fraunces';
  border: solid 2px #FFFFFF;
  margin: 20px;
`

const CoverPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;
`
