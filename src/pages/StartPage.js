import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { LandingPage } from './LandingPage'
import { Footer } from 'components/Footer'

import { LoginSignup } from 'components/LoginSignup'

import { Header } from 'styling/lib/Header'


export const StartPage = () => {
  
const accessToken = useSelector((store) => store.userReducer.login.accessToken)
  
  if (!accessToken) { 
  return (
    <StartPageContainer>
      <Header>
        <p className="sub-title">Yes, I like to knit. No, I am not 'old'.</p>
        <h1 className="head-title">Knitting Circle</h1>
      </Header>
      <CoverPhoto src="https://i.pinimg.com/564x/f9/19/79/f91979a3628229f6f55444b495cf5b62.jpg" alt="knitting-model"></CoverPhoto>
      <LoginSignup />
      <Footer />
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
<<<<<<< HEAD
  border: dotted 2px #FFFFFF;
=======
  border: dashed 2px #c3c9b7;
>>>>>>> 93414044b820843aa1d5f5900d2fe71dd212a636
  margin: 20px;
`

const CoverPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 60%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
