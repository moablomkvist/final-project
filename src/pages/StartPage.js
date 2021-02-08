import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { LandingPage } from './LandingPage'

import { LoginSignup } from 'components/LoginSignup'

import { Header } from 'styling/lib/Header'


export const StartPage = () => {
  
const accessToken = useSelector((store) => store.userReducer.login.accessToken)
  
  if (!accessToken) { 
  return (
    <StartPageContainer>
      <Header>
        <p className="sub-title">Yes, I like to knit. No, I am not 'old'.</p>
        <h1 className="head-title">KNITTING CIRCLE</h1>
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
