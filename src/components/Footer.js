import React from 'react'
import styled from 'styled-components'

export const Footer = () => {

  return (
    <FooterContainer>
        <Icon src="../assets/knit-2923687_640.png" alt="Logo"></Icon>
      <InfoContainer>
        <Info>We are the virtual knitting circle. Share free patterns and start knitting.</Info>
        <Copyright>© Moa Blomkvist & Caroline Birgersson</Copyright>
      </InfoContainer>
    </FooterContainer>
  )};

  const FooterContainer = styled.footer `
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background: #f3eadf;
      @media (min-width: 667px) and (max-width: 1024px) {
        flex-direction: row;
        justify-content: start;
      }
    @media (min-width: 1025px) {
      flex-direction: row;
      height: 200px;
    }

`; 

  const InfoContainer = styled.section`
    width: 100%;
    text-align: center;
    margin: 40px;

      @media (min-width: 667px) and (max-width: 1024px) {
        width: 50%;
      }
      @media (min-width: 1025px) {
        flex-direction: row;
      }
  `;

  const Info = styled.p`
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 50%;
    }
      @media (min-width: 1025px) {
      width: 27%;
      flex-direction: row;
    }
  `
  const Copyright = styled.p`
    font-size: 10px;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 50%;
    }
      @media (min-width: 1025px) {
      width: 27%;
      flex-direction: row;
    }
  `;

  const Icon = styled.img`
    width: 20%;
    @media (min-width: 667px) and (max-width: 1024px) {
      width: 15%;
    }
    @media (min-width: 1025px) {
      width: 8%;
    }
`;







