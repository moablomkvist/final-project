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

    <IntroWrapper>
      <Heading>"If not knit now then when"</Heading>
      <Ingress>
        Some call it slow fashion. We call it a matter of thinking. 
        Knitting is a way of keeping you warm, your head mindful and the clothes you wear meaningful. 
        This is a virtual knitting circle for those who want more knitting in their lives. We make it easy to start.
      </Ingress>
    </IntroWrapper>

      <ContentContainer>
        <CoverPhoto src="https://i.pinimg.com/564x/f9/19/79/f91979a3628229f6f55444b495cf5b62.jpg" alt="knitting-model"></CoverPhoto>
        <LoginSignup />
      </ContentContainer>
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
  border: dashed 2px #c3c9b7;
  background: #F3EBDF;
  margin: 20px;

`;

const ContentContainer = styled.section`

  @media (min-width: 667px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
    display: flex;  
  }
`;


const CoverPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 60%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  font-family: 'Fraunces';
  width: 100%;

  &.ending-wrapper {
    border-top: dashed 2px #c3c9b7;
    border-bottom: none;
  }
`

const Heading = styled.h1`
  font-size: 30px;
  width: 90%;

  @media (min-width: 768px) {
    font-size: 40px;
    width: 40%;
  }
`

const Ingress = styled.p`
  width: 90%;
  padding-bottom: 50px;
  border-bottom: dashed 2px #c3c9b7;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 40%;
  }
`

