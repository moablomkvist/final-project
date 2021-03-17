import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { LandingPage } from "./LandingPage";
import { Footer } from "components/Footer";
import { LoginSignup } from "components/LoginSignup";

import { Header } from "styling/lib/Header";

export const StartPage = () => {
  const accessToken = useSelector(
    (store) => store.userReducer.login.accessToken
  );

  if (!accessToken) {
    return (
      <StartPageContainer>
        <Header>
          <p className="sub-title">Yes, I like to knit. No, I am not 'old'.</p>
          <h1 className="head-title-start">Knitting Circle</h1>
        </Header>

        <IntroWrapper>
          <img
            className="knit-logo"
            src="assets/knit-2923687_640.png"
            alt="logo"
          />
          <Heading>"If not knit now then when"</Heading>
          <Ingress>
            Vissa kallar det slow fashion. Vi kallar det för ett medvetet förhållningssätt.
            Stickningen håller dig varm, ditt huvud rensat och gör varje stickat plagg betydelsefullt. 
            Det här är en virtuell syjunta för alla er som vill låta stickningen ta större plats i ert liv. 
            Vi gör det enkelt att sätta igång.
          </Ingress>
        </IntroWrapper>

        <ContentContainer>
          <CoverPhoto
            src="../assets/coverphoto3.jpg"
            alt="Model in knitted clothes"
          ></CoverPhoto>
          <LoginSignup />
        </ContentContainer>
        <Footer />
      </StartPageContainer>
    );
  } else {
    return <LandingPage />; // If user is logged in, show profile
  }
};

const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: solid 2px #f3eadf;
  background: #a4a99b;
  margin: 20px;
`;

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 20px;
  width: 100%;

  & .ending-wrapper {
    border-top: dashed 2px #c3c9b7;
    border-bottom: none;
  }

  & .knit-logo {
    width: 20%;
    padding-bottom: 20px;

    @media (min-width: 667px) {
      width: 10%;
    }
  }
`;

const Heading = styled.h1`
  width: 90%;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1025px) {
    width: 40%;
    font-size: 40px;
  }
`;

const Ingress = styled.p`
  width: 90%;
  padding-bottom: 50px;
  border-bottom: dashed 2px #c3c9b7;

  @media (min-width: 667px) and (max-width: 1024px) {
    font-size: 20px;
    width: 50%;
  }
  @media (min-width: 1025px) {
    width: 40%;
  }
`;

const ContentContainer = styled.section`
  justify-content: center;
  align-items: flex-start;
  padding: 30px;

  @media (min-width: 1025px) {
    display: flex;
  }
`;

const CoverPhoto = styled.img`
  width: 100%;
  padding: 10px;

  @media (min-width: 667px) and (max-width: 1024px) {
    padding: 0;
    margin: 20px 0;
  }

  @media (min-width: 1025px) {
    width: 60%;
  }
`;
